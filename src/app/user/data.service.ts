import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { SingleUser } from './single-user/single-user.interface';
import { User } from './user-interface';
import { UserList } from './view-users/userlist.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = environment.baseUrl;

  constructor(
    private httpClient:HttpClient
  ) { }

  createUser(userForm:any){
    
    this.httpClient.post(this.baseUrl,userForm)
    .subscribe(response =>{
      console.log(response)
    })

  }

  getUser(userID:string){
    return this.httpClient.get<{data:string}>(this.baseUrl+'api/users/'+userID)
    .pipe(catchError(this.handleError))
    
  }

  getAllUsers(pageNo:number){
    return this.httpClient.get<UserList>(this.baseUrl+'api/users?page='+pageNo).pipe(catchError(this.handleError))
   
  }

  updateUser(){

  }

  deleteUser(userID:string){
    this.httpClient.delete(this.baseUrl+'api/users/'+userID)
  }

  //Delete user
  patchUser(){

  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
   
    return throwError(errorMessage);
  }
}
