import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public messages :String[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    // this.messages = [
    //   "Cats",
    //   "Dogs",
    //   "Hey what's up",
    //   "Bunnies",
    //   "Stop it with the animals"
    // ];

    this.chatService.onMessage().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage(text){
    if(text.length > 0){
      this.chatService.sendMessage(text);
    }
  }
}
