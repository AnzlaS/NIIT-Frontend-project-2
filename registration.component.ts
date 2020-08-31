import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService) {
  }
  // tslint:disable-next-line:typedef
  get UserEmail(){
    return this.usersaveform.get('useremail');
  }
  // tslint:disable-next-line:typedef
  get UserContact(){
    return this.usersaveform.get('usercontact');
  }
  // tslint:disable-next-line:typedef
  get UserPassword(){
    return this.usersaveform.get('userpassword');
  }
  user: User = new User();
  submitted = false;
// tslint:disable-next-line:typedef
  usersaveform = new FormGroup({
    username: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    useremail: new FormControl('', [Validators.required, Validators.email])
  });
  // tslint:disable-next-line:typedef
  get UserName(){
    return this.usersaveform.get('username');
  }
// tslint:disable-next-line:typedef

  ngOnInit(): void {
    this.submitted = false;
  }

  // tslint:disable-next-line:typedef
  saveUser(saveUser){
    this.user = new User();
    this.user.username = this.UserName.value;
    this.user.useremail = this.UserEmail.value;
    this.user.Usercontact = this.UserContact.value;
    this.user.userpassword = this.UserPassword.value;

    this.submitted = true;
    this.save();
  }
  // tslint:disable-next-line:typedef
  save() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }



  // tslint:disable-next-line:typedef
  addUserForm(){
    this.submitted = false;
    this.usersaveform.reset();
  }
}
