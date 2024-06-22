import { Injectable } from '@nestjs/common';
import { CreateSocketDto } from './dto/create-socket.dto';
import { UpdateSocketDto } from './dto/update-socket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Socket } from './entities/socket.entity'
@Injectable()
export class SocketService {
  constructor(
    @InjectRepository(Socket)
    private readonly socket: Repository<Socket>,
  ) { }
  // 创建消息
  async create(body: any, client) {
    const formatMessage = (form: any, to: any, message: string, type: string) => {
      return {
        formName: form.nickname,
        formId: form.id,
        formUrl: form.avatar,
        toUrl: to.avatar,
        toId: to.id,
        message,
        createTime: new Date(),
        toName: to.nickname,
        type
      };
    }
    const obj = formatMessage(body[0], body[1], body[2], body[3]);
    const socket = await this.socket.createQueryBuilder('socket');
    const newSocket = await socket.insert().into(Socket).values(obj).execute();
    obj['id'] = newSocket.identifiers[0].id
    // 发送消息
    if (body[3] == "user") {
      client.emit('message', obj);
    } else {
      client.to('room').emit('message', obj);
    }
  }
  // 获取历史消息
  async gethistoryData(name: string, client) {
    const socket = await this.socket.createQueryBuilder('socket');
    const res = await socket.getMany();
    socket.where('formName = :formName OR toName = :formName ', { formName: name });
    let result = await socket.getMany();
    // 过滤出用户和聊天室的消息
    const userMessages = result.filter(item => item.toName !== "聊天室");
    const roomMessages = res.filter(item => item.toName === "聊天室");
    client.emit('historyData', userMessages, roomMessages);
  }
  // 撤回消息
  async withdrawMessage(id: number, client) {
    const socket = await this.socket.createQueryBuilder('socket');
    socket.update().set({ status: 1 }).where('id = :id', { id }).execute();
    client.emit('withdrawMessageAll', id);
  }
}
