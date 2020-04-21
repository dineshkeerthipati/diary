import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth-service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  btnName = 'Login';
  loginRegForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,
              private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    const url = this.router.url;
    this.buildForm();
    this.changeButtonName(url);
  }

  buildForm() {
    this.loginRegForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['']
    });
  }

  private changeButtonName(url: string): void {
    if (url.includes('register')) {
      this.btnName = 'Register';
      this.loginRegForm.get('confirmPassword').setValidators([Validators.required]);
      this.loginRegForm.get('confirmPassword').updateValueAndValidity();
    }
  }

  submitForm() {
    if (this.btnName === 'Login') {
      this.authService.setLetUserIn(true);
      console.log('fire login');
    } else if (this.btnName === 'Register') {
      console.log('fire register');
    }
  }

  onTestLogin(): void {
    this.loginRegForm.patchValue({
      email: 'test@test.com',
      password: 'welcome123'
    });
  }

}
