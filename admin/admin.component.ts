import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  // tslint:disable-next-line:typedef
  get UserEmail() {
    return this.useradmin.get('useremail');
  }

  // tslint:disable-next-line:typedef
  get UserPassword() {
    return this.useradmin.get('userpassword');
  }

  user: User = new User();
  submitted = false;
  // tslint:disable-next-line:typedef
  useradmin = new FormGroup({
    userpassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    useremail: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit(): void {
    this.submitted = false;
  }

  // tslint:disable-next-line:typedef
  adminUser(adminUser) {
    this.user.userpassword = this.UserPassword.value;
    this.user.useremail = this.UserEmail.value;
  }
}
