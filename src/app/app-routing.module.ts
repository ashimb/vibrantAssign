import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { ViewUsersComponent } from './user/view-users/view-users.component';

const routes: Routes = [

  // {path:'', component:AppComponent, redirectTo:'login'},
  {path:'login', component:LoginComponent},
  {path:'create', component: CreateUserComponent,canActivate:[AuthGuard]},
  {path:'create/:id', component: CreateUserComponent,canActivate:[AuthGuard]},
  {path:'user', component: SingleUserComponent,canActivate:[AuthGuard]},
  {path:'view', component:ViewUsersComponent,canActivate:[AuthGuard]},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
