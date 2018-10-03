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
  public APIregis = 'http://localhost:8080/WebsiteRaoVat/user/register';
  public APIlogin = 'http://localhost:8080/WebsiteRaoVat/user/login';
  public apiAllUser = 'http://localhost:8080/WebsiteRaoVat/user/getall';

  constructor(private http: HttpClient) { }

  // postIfPr(info: Product): any {
  //   return this.http.post<Product>(this.api, info, httpOptions);
  // }

    // getProduct(): any {
  //   return this.http.get(this.api);
  // }

  reGis(user: User): any {
    return this.http.post<User>(this.APIregis, user, httpOptions);
  }

  getReGis(): any {
    return this.http.get(this.APIregis);
  }

  loGIn(user : User) : any {
    return this.http.post<User>(this.APIlogin, user, httpOptions);
  }

  getLogin(): any {
    return this.http.get(this.APIlogin);
  }

  getUser(): any {
    return this.http.get(this.apiAllUser);
  }
}
