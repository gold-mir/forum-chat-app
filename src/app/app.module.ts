import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatComponent } from './chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatService } from './chat.service';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {}};



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChatComponent
    ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    SocketIoModule.forRoot(config)
    ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
