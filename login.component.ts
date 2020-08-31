import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private userService: UserService) {
  }

  // tslint:disable-next-line:typedef
  get UserEmail() {
    return this.userlogin.get('useremail');
  }

  // tslint:disable-next-line:typedef
  get UserPassword() {
    return this.userlogin.get('userpassword');
  }

  user: User = new User();
  submitted = false;
  // tslint:disable-next-line:typedef
  userlogin = new FormGroup({
    userpassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    useremail: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit(): void {
    this.submitted = false;
  }

  // tslint:disable-next-line:typedef
  logUser(logUser) {
  //  this.user = new User();
    this.user.userpassword = this.UserPassword.value;
    this.user.useremail = this.UserEmail.value;
  }

}
