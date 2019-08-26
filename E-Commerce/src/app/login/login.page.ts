import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';
import {User} from '../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  items:any=[];
  user:User;
  constructor(
    private formBuilder:FormBuilder,
    private login:LoginService) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  signin(loginForm:FormGroup){
    this.user=loginForm.value;
    this.login.signin(this.user);
  }
  signup(loginForm:FormGroup){
    this.user=this.loginForm.value;
    this.login.signup(this.user);
  }
}
