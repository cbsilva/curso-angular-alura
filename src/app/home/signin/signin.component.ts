import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  // selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public isMessage = false;
  public message = '';

  loginForm: FormGroup;

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDectorService) { }

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
            // tslint:disable-next-line: no-unused-expression
            this.platformDetectorService.isPlatformBrowser() &&
                 this.userNameInput.nativeElement.focus();
          }
        );
  }

}
