import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginModel } from './login/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;

  isAuthFlag: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private router:Router) {}

  signIn(signInBody: LoginModel) {
    this.httpClient
      .post<{ token: string }>(this.baseUrl + 'api/login/', signInBody)
      .subscribe((response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['view'])
        this.isAuthFlag = true;

        
      });
  }

}
