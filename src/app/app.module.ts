import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import{ HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { ViewUsersComponent } from './user/view-users/view-users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    SingleUserComponent,
    ViewUsersComponent,
    NotfoundComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
    //JwPaginationModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
