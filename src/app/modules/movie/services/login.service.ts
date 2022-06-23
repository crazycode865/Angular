import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn!: boolean;
  constructor() {
    this.isLoggedIn = false;
  }
  isUserLoggedIn = () => {
    return this.isLoggedIn;
  };
  loginUser = (username: string, password: string): Observable<boolean> => {
    if (username === 'awa' && password === 'awa123') {
      this.isLoggedIn = true;
      return of(this.isLoggedIn);
    } else {
      return of(false);
    }
  };
}
