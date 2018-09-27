import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { HttpService } from '../providers/http.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  public checkbox = false;
  public formErrors = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  firstnameRe: string = '';
  lastnameRe: string = '';
  emailRe: string = '';
  passwordRe: string = '';

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
  }

  isCheckbox() {
    if (this.checkbox === true) {
      this.checkbox = false;
    } else {
      this.checkbox = true;
    }
    console.log(this.checkbox);
  }


  public register() {
    if (this.checkbox === true) {
      this.authService.register().subscribe(
        () => {
          const regis: any = {
            name: this.firstnameRe + ' ' + this.lastnameRe,
            email: this.emailRe,
            pass: this.passwordRe,
          };
          this.httpService.reGis(regis).subscribe(data => {
          });
          this.lastnameRe = '';
          this.firstnameRe = '';
          this.emailRe = '';
          this.passwordRe = '';
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
