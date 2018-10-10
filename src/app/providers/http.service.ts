import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';
import { Search } from '../interfaces/Search';

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
  public apiPubUp = 'http://localhost:8080/WebsiteRaoVat/product/update';
  public apiUserUp = 'http://localhost:8080/WebsiteRaoVat/user/update';
  public apiProSear = 'http://localhost:8080/WebsiteRaoVat/product/timkiem';

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

  putUserUpdate(user: User): any {
    return this.http.put(this.apiUserUp, user, httpOptions);
  }

  searchPro(search: Search): any {
    return this.http.post<any>(this.apiProSear, search, httpOptions);
  }

  getPublished(idUser): any {
    return this.http.get(`${this.ApiPublished}/${idUser}`);
  }

  putPublishedUpdate(product: Product): any {
    return this.http.put(this.apiPubUp, product, httpOptions);
  }

  getSelled(idUser): any {
    return this.http.get(`${this.apiSelled}/${idUser}`);
  }

  putPublished(idUser, idProduct: number): any {
    return this.http.put(`${this.ApiPublished}/${idUser}`, idProduct, httpOptions);
  }


}
