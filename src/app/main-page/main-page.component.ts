import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public loggedIn: boolean;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.loggedIn = user ? true : false;
    });
  }

}
