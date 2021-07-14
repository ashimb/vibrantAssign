import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { SingleUser } from './single-user.interface';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  email!: string;
  avatar!: string;
  userID!:string ;

  constructor(
    private dataService: DataService,
    private router : Router,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      params => {
        this.userID =  params['id'];
        // this.language=params['language'];
      }
    )

    this.fetchUserData( this.userID );
  }

  fetchUserData(userID:string){
    this.dataService.getUser(userID)
    .subscribe(response =>{
      console.log(response.data as any)

      const userdata = response.data as any;

      console.log(userdata["id"])

      this.firstName = userdata["first_name"];
      this.lastName = userdata["last_name"];
      this.email = userdata["email"];
      this.avatar = userdata["avatar"];
      this.userID = userdata["id"]; 

    })
  }

deleteUser(userID:string){
    this.dataService.deleteUser(userID);
  }

editUser(userID:string){
    

  }

}
