import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { SocketService } from './socket.service';
import { Server, Socket } from 'socket.io';
@WebSocketGateway({ cors: { origin: '*' } })
export class SocketGateway {
  constructor(private readonly socketService: SocketService) {
  }
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('historyData')
  gethistoryData(@MessageBody() name: string, @ConnectedSocket() client: Socket) {
    this.socketService.gethistoryData(name, client);
  }
  @SubscribeMessage('join')
  join(@MessageBody() name: string, @ConnectedSocket() client: Socket) {
    // if (name == 'jiaoy') {
    client.join('room')
    // }
  }
  @SubscribeMessage('chatMessage')
  create(@MessageBody() body: any) {
    return this.socketService.create(body, this.server);
  }

  @SubscribeMessage('withdraw')
  withdrawMessage(@MessageBody() id: number) {
    return this.socketService.withdrawMessage(id, this.server);
  }
}
