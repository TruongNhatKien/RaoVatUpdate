import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { User } from '../interfaces/User';
import { HttpService } from './http.service';


@Injectable()
export class AuthGuard implements CanActivate {
  user:User;
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.user = JSON.parse(localStorage.getItem('user'));
    // go to login
    if (this.user === null) {
      this.router.navigate(['/user/login']);
      return false;
    }
    // da dang nhap =>
    return true;
  }
}
