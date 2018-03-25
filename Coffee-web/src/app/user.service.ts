import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private  isUserLoggedIn: boolean= false;
  constructor() { }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  getUsetLoggedIn() {
    return this.isUserLoggedIn;
  }


}
