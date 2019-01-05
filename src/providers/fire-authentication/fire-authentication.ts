import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


/*
  Generated class for the FireAuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireAuthenticationProvider {
  
  constructor(public http: HttpClient,public fireAuth: AngularFireAuth) {
    console.log('Hello FireAuthenticationProvider Provider');
  }

  loginUser(user,passwd) {
    return this.fireAuth.auth.signInWithEmailAndPassword(user, passwd);
  }

  registerUser(user,passwd) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(user, passwd);
  }

  logoutUser(): Promise<void> {
    return this.fireAuth.auth.signOut();
  }

}
