import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatComponent } from './chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatService } from './chat.service';
import { environment } from './../environments/environment';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth/auth.component';

const config: SocketIoConfig = { url: environment.socketUrl, options: {}};



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChatComponent,
    AuthComponent
    ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    SocketIoModule.forRoot(config),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
    ],
  providers: [ChatService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
