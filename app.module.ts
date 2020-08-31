
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserwindowComponent } from './userwindow/userwindow.component';
import { AdminwindowComponent } from './adminwindow/adminwindow.component';
import { ViewComponent } from './view/view.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    RegistrationComponent,
    UserwindowComponent,
    AdminwindowComponent,
    ViewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    RouterModule.forRoot([
        {
          path: 'registration',
          component: RegistrationComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'admin',
          component: AdminComponent
        },
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'userwindow',
          component: UserwindowComponent
        },
        {
          path: 'adminwindow',
          component: AdminwindowComponent
        },
        {
          path: 'view',
          component: ViewComponent
        },
      {
        path: 'profile',
        component: ProfileComponent
      }
      ]
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
