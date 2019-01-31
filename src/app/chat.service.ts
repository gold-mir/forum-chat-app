import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class ChatService  {

  constructor(private socket: Socket) { }

  sendMessage(username, message){
    this.socket.emit("chat message", {user: username, body: message});
  }

  onMessage(): Observable<string> {
    return new Observable<string>((observer) => {
      this.socket.on('chat message', (data) => {
        observer.next(data);
      });
    });
  }
}
