import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private users = new BehaviorSubject<User[]>([]);
  private products = new BehaviorSubject<Product[]>([]);
  
  constructor(
    private httpService:HttpService
  ) { }

  public loadProductsIfNeed(idUser) {
    this.httpService.getPublished(idUser).subscribe((data) => {
      this.products.next(data);
    });
  }

  public allFiles() {
      return this.users.asObservable();
  }
}
