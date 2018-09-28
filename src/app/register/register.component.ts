import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { HttpService } from '../providers/http.service';
import { StoreService } from '../providers/store.service';
import { User } from '../interfaces/User';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  users: User[];
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
  ) { }

  ngOnInit() {
    this.buildForm();

    this.httpService.getReGis().subscribe(data => {
      this.users = data;
      console.log(this.users);

    });
  }

  isCheckbox() {
    if (this.checkbox === true) {
      this.checkbox = false;
    } else {
      this.checkbox = true;
    }
    console.log(this.checkbox);
  }


  public register(firstnameRe, lastnamRe, emailRe, passwordRe) {
    if (this.checkbox === true) {
      this.authService.register().subscribe(
        () => {
          const regis: any = {
            name: firstnameRe + '' + lastnamRe,
            email: emailRe,
            pass: passwordRe,
          };
          this.httpService.reGis(regis).subscribe(data => {
          });
          // dang ki thanhcong
          this.router.navigate(['/login']);
        },
        (err) => {
          //
        }
      );
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
