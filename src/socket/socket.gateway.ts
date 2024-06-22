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
    client.join('room')
    this.socketService.join(name, client);
  }
  @SubscribeMessage('chatMessage')
  create(@MessageBody() body: any, @ConnectedSocket() client: Socket) {
    return this.socketService.create(body, this.server, client);
  }

  @SubscribeMessage('withdraw')
  withdrawMessage(@MessageBody() id: number) {
    return this.socketService.withdrawMessage(id, this.server);
  }
}
