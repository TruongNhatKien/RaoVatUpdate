import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Product } from '../interfaces/Product';
import { User } from '../interfaces/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public APIinsert = 'http://localhost:3000/User';
  public APIlogin = 'http://localhost:8080/WebsiteRaoVat/api/user/login';
  public api = 'localhost:8080/WebsiteRaoVat/api/product/insert';

  constructor(private http: HttpClient) { }

  postIfPr(info: Product): any {
    return this.http.post<Product>(this.api, info, httpOptions);
  }

  reGis(user: User): any {
    return this.http.post<User>(this.APIinsert, user, httpOptions);
  }

  getReGis(): any {
    return this.http.get(this.APIinsert);
  }

  loGIn(user : User) : any {
    return this.http.post<User>(this.APIlogin, user, httpOptions);
  }

  getProduct(): any {
    return this.http.get(this.api);
  }

  getUser(): any {
    return this.http.get(this.APIinsert);
  }
}
