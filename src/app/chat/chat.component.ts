import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public username: string;

  public messages :String[] = [];

  constructor(private chatService: ChatService, public authService: AuthService) { }

  ngOnInit() {

    this.chatService.onMessage().subscribe((message: any) => {
      this.messages.push(`${message.user}: ${message.body}`);
    });

    this.authService.user.subscribe((user) => {
      this.username = user.email;
    });
  }

  sendMessage(text){
    if(text.length > 0){
      this.chatService.sendMessage(this.username, text);
    }
  }
}
