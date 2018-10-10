import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  user=new BehaviorSubject<User>(null);
  constructor() { }

  infoUser(user){
    this.user.next(user);
  }
  
  getInfoUser(){
    return this.user.asObservable();
  }
}
