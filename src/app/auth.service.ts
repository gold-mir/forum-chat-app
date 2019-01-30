import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  async signup(email: string, password: string){
    let createUser: any = this.firebaseAuth.auth.createUserWithEmailAndPassword(email,password);

    try {
      let result: any = await createUser;
      console.log(`Success! ${result}`);
    } catch(error) {
      console.log(`Something went wrong: ${error.message}`);
    }
  }

  async login(email: string, password: string){
    let doLogin: any = this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    
    try {
      let result: any = await doLogin;
      console.log(`Success! ${result}`);
    } catch (error){
      console.log(`Something went wrong: ${error.message}`);
    }
  }

  logout(){
    this.firebaseAuth.auth.signOut();
  }
  
}
