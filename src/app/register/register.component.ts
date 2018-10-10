import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { HttpService } from '../providers/http.service';
import { User } from '../interfaces/User';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;
  registerForm: FormGroup;
  public checkbox = false;
  public formErrors = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  public passwordcf(c: AbstractControl): any {
    if (!c.parent || !c) { return; }
    const pw = c.parent.get('password');
    const pwcf = c.parent.get('passwordConfirm');

    if (!pw || !pwcf) { return; }
    if (pw.value !== pwcf.value) {
      return { invalid: true };
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private httpService: HttpService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  isCheckbox() {
    if (this.checkbox === true) {
      this.checkbox = false;
    } else {
      this.checkbox = true;
    }
  }

  showSuccess() {
    this.toastr.success('Đăng Kí thành công!');
  }

  showError() {
    this.toastr.error('Email đã tồn tại, vui lòng nhập Email khác!');
  }

  showErrorCheck() {
    this.toastr.error('Vui lòng chọn đồng ý với điều khoản của Matket CK!');
  }


  public register(firstnameRe, lastnamRe, emailRe, passwordRe) {
    const regis: any = {
      name: firstnameRe + ' ' + lastnamRe,
      email: emailRe,
      pass: passwordRe,
    };
    if (this.checkbox === false) {
      this.showErrorCheck();
    } else {
      this.httpService.reGis(regis).subscribe(data => {
        if (data) {
          this.showSuccess();
          this.router.navigate(['/user/login']);
        } else {
          this.showError();
        }
      });
    }
  }

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]],
      lastname: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]],
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
      passwordConfirm: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        this.passwordcf,
      ]],
    });
  }

}
