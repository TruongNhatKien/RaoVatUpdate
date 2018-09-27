import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { User } from '../interfaces/User';
import { HttpService } from '../providers/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public login(email, pass) {
    this.authService.login().subscribe(
      (resp) => {
        let user: User = {
          email: email,
          pass: pass
        };
        this.httpService.loGIn(user).subscribe(data => {
        });
        localStorage.setItem('user', JSON.stringify(user));
        // dang nhap thanhcong
        this.router.navigate(['/home']);
      },
      () => {
        //
      }
    );
  }


  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]],

      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ]],
    });
  }
}
