import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public isLogged = false;

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

  public register() {
    return new Observable((subscriber) => {
      setTimeout(() => {
        this.isLogged = true;
        subscriber.next(this.isLogged);
        subscriber.complete();
      });
    });
  }
}
