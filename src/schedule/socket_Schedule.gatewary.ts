import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Server, Socket } from 'socket.io';
const schedule = require('node-schedule');

@WebSocketGateway({ cors: { origin: '*' }, namespace: 'schedule' })
export class SocketScheduleGateway {
  private scheduledJobs: { [key: string]: any } = {}; // Object to store scheduled jobs

  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) { }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('join')
  join(@MessageBody() id: string, @ConnectedSocket() client: Socket) {
    client.join(id);
  }

  @SubscribeMessage('taskActivation')
  async not(@ConnectedSocket() client: Socket) {
    this.cancelScheduledJobs();
    const filterTime = (time: Date, remind: number) => {
      const result = new Date(time);
      result.setMinutes(result.getMinutes() - remind);
      const filterTime1 = (originalDateTimeString: Date) => {
        const date = new Date(originalDateTimeString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1，然后补齐两位数
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
      }
      return filterTime1(result);
    };
    const queryBuilder = this.scheduleRepository.createQueryBuilder('schedule');
    const result = await queryBuilder.where('schedule.remind != 1').andWhere('start > :now', { now: new Date() }).getMany();
    result.forEach((item) => {
      const peopleArr = JSON.parse(JSON.parse(JSON.stringify(item.participants)));
      if (item.remind == '1') return
      const time = filterTime(item.start, +item.remind);
      const job = schedule.scheduleJob(time, () => {
        peopleArr.forEach(element => {
          this.server.to(String(element)).emit('message', { title: item.title, start: item.start });
        });
      });
      this.scheduledJobs[item.id] = job;
    });
  }
  private cancelScheduledJobs() {
    Object.keys(this.scheduledJobs).forEach(jobId => {
      const job = this.scheduledJobs[jobId];
      if (job) {
        job.cancel();
      }
    });
    this.scheduledJobs = {}; // Clear the object
  }
}
