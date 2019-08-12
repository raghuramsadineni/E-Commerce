import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  items:any=[];
  constructor(
    private storage:Storage,
    private formBuilder:FormBuilder,
    private router:Router,
    private login:LoginService) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  signin(loginForm:FormGroup){
    this.items.push(JSON.stringify(loginForm.value));
    this.storage.set('login',this.items);
    console.log('Success');
  }
  signup(loginForm:FormGroup){
    this.storage.get('login').then((val)=>{
      for(let i in val){
        if(JSON.parse(val[i]).username == loginForm.value.username){
          if(JSON.parse(val[i]).password == loginForm.value.password)
          {
            this.login.set(JSON.parse(val[i]).username);
            this.router.navigate(['/home']);
          }
        }
      }
    });
  }
}
