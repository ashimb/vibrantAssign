import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInModel: LoginModel= new LoginModel

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(signIn:NgForm){

   this.authService.signIn(signIn.value)

    console.log(signIn.value);
    
  }

}
