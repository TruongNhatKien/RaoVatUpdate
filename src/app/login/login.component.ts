import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { User } from '../interfaces/User';
import { HttpService } from '../providers/http.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService,
    private toastr: ToastrService,
    private titleService: Title

  ) { }

  ngOnInit() {
    this.buildForm();
    this.titleService.setTitle('Đăng Nhập');
  }

  showSuccess() {
    this.toastr.success('Đăng Nhập thành công!');
  }

  showError() {
    this.toastr.error('Tên hoặc mật khẩu không đúng!');
  }

  public login(email, pass) {
    const user: User = {
      email: email,
      pass: pass
    };
    this.httpService.loGIn(user).subscribe((data: User) => {
      if (data) {
        localStorage.setItem('user', JSON.stringify(data));
        this.showSuccess();
        this.router.navigate(['/home']);
      } else {
        this.showError();
      }
    });
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
