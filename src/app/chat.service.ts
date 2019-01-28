import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage(msg: string){
    this.socket.emit("chat message", msg);
  }

  onMessage(): Observable<string> {
    return new Observable<string>((observer) => {
      this.socket.on('chat message', (data) => {
        observer.next(data);
      });
    });
  }
}
