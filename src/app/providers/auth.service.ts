import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  isLogged = false;

  constructor() { }

  public login() {
    return new Observable((subscriber) => {
      setTimeout(() => {
        this.isLogged = true;
        subscriber.next(this.isLogged);
        subscriber.complete();
      }, 500);
    });
  }
}
