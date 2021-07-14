import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  headerText='Create User';
  buttonText='Submit'

  userForm!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private dataService:DataService) { }


  ngOnInit(): void {
    this.initialiseForm();
  }
  initialiseForm() {
    this.userForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      mobile:['',Validators.required],
      address:['',Validators.required],
      pincode:['',Validators.required],
     // gender:''

    });
  }

  get f(){
    return this.userForm.controls;
  }

  onSubmit(){

   // this.dataService.createUser(this.userForm.value)
    console.log(this.userForm);
  }

}
