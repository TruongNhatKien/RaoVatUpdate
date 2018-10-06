import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';

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
  public ApiPublished = 'http://localhost:8080/WebsiteRaoVat/product/published';
  public apiPost = 'http://localhost:8080/WebsiteRaoVat/product/post';
  public apiSelled = 'http://localhost:8080/WebsiteRaoVat/product/selled';

  constructor(private http: HttpClient) { }

  postPro(info: Product): any {
    return this.http.post<Product>(this.apiPost, info, httpOptions);
  }

  // getProduct(): any {
  //   return this.http.get(this.api);
  // }

  reGis(user: User): Observable<User> {
    return this.http.post<User>(this.APIregis, user, httpOptions);
  }

  loGIn(user: User): Observable<User> {
    return this.http.post<User>(this.APIlogin, user, httpOptions);
  }

  getUser(): any {
    return this.http.get(this.apiAllUser);
  }

  getPublished(idUser): any {
    return this.http.get(`${this.ApiPublished}/${idUser}`);
  }

  getSelled(idUser): any {
    return this.http.get(`${this.apiSelled}/${idUser}`);
  }
}
