import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modules/movie/models/user';
import { LoginService } from 'src/app/modules/movie/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  retUrl: string = '';
  // loginForm!: FormGroup;
  user!: User;
  constructor(
    private _router: Router,
    private _loginService: LoginService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((map) => {
      let url = map.get('returnUrl');
      if (url) this.retUrl = url;
    });
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  onSubmit = (loginForm: FormGroup) => {
    let user = loginForm.value;
    console.log(user);
    this._loginService.loginUser(user.username, user.password).subscribe({
      next: (data: boolean) => {
        if (!data) this._router.navigate(['home']);
        else if (data && this.retUrl != '') {
          console.log(`${data}`);
          this._router.navigate([this.retUrl]);
        } else {
          this._router.navigate(['home']);
        }
      },
    });
  };
}
