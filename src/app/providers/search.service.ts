import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  idUser=new BehaviorSubject<number>(null);
  constructor() { }

  idUs(idUser){
    this.idUser.next(idUser);
  }
  
  getIdUs(){
    return this.idUser.asObservable();
  }
}
