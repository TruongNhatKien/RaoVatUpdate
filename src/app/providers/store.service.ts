import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private users = new BehaviorSubject<User[]>([]);
  
  constructor(
    private httpService:HttpService
  ) { }

  public loadDataIfNeed() {
    this.httpService.getUser().subscribe((data) => {
      this.users.next(data);
    });
  }

  public allFiles() {
      return this.users.asObservable();
  }
}
