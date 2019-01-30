import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  public username: string;
  public user: firebase.User;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.user = user;
      if(user != null){
        this.username = user.email;
      } else {
        this.username = "not logged in";
      }
    });
  }

  login(email: string, password:string){
    this.authService.login(email, password);
  }

  logout(){
    this.authService.logout();
  }

  signup(email: string, password: string){
    this.authService.signup(email, password);
  }
}
