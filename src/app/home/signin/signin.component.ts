import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  // selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  public isMessage = false;
  public message = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.authService
        .authenticate(username, password)
        .subscribe(
          () => {
            this.router.navigate(['user', username]);
            console.log('Autenticado');
            this.isMessage = false;
          },
          err  => {
            console.log(err);
            this.message = 'Invalid user name or password';
            this.isMessage = true;
            this.loginForm.reset();
          }
        );
  }

}
