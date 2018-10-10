import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class DetailProService {
  product = new BehaviorSubject<Product>(null);
  private isClicked = new BehaviorSubject(null);
  private kv = new BehaviorSubject(null);
  private dm = new BehaviorSubject(null);
  constructor() { }

  detailPro(product) {
    this.product.next(product);
  }

  getDetailPro() {
    return this.product.asObservable();
  }

  isClick(isClick) {
    this.isClicked.next(isClick);
  }

  getIsClick() {
    return this.isClicked.asObservable();
  }

  khuVuc(kv){
    this.kv.next(kv);
  }

  getKhuVuc(){
    return this.kv.asObservable();
  }

  danhMuc(dm){
    this.dm.next(dm);
  }

  getDanhMuc(){
    return this.dm.asObservable();
  }
}
