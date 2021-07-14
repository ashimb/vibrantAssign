import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SingleUser } from '../single-user/single-user.interface';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  userData:SingleUser[]=[]

  pageNo: number=1;
  perPage!: string;
  totalItems!: string;
  totalPages!: string;


  constructor(
    private dataservice:DataService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.fetchAllUsers(this.pageNo);
    
  }

  fetchAllUsers(pageNo:number){
    this.dataservice.getAllUsers(pageNo)
    .subscribe(response =>{
      console.log(response)

      this.userData = response.data

      this.pageNo = parseInt(response.page);
      this.perPage = response.per_page;
      this.totalItems = response.total;
      this.totalPages = response.total_pages;
    });
  }

  gotoUser(event:any, item:SingleUser){

    console.log(item.id);

    this.router.navigate(['user'],{queryParams:{id:item.id}})

  }

  getNextPage(nxtPageNo :any){
    this.fetchAllUsers(nxtPageNo);
  }

 /*  onChangePage(pageOfItems: Array<any>){

    console.log(pageOfItems);

  }
 */
}
