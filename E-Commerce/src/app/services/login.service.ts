import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';
import {User} from '../models/users';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uname="Profile";
  private name = new BehaviorSubject<string>(this.uname);
  items:User[]=[];
  username=this.name.asObservable();
  constructor(private storage:Storage,private router:Router)
  { }
  set(uname:string)
  {
    this.name.next(uname);
  }
  signin(user:User){
    this.items.push(user);
    this.storage.set('login',this.items);
    console.log('Success');
  }
  signup(user:User){
    this.storage.get('login').then((val)=>{
      for(let i in val){
        if(val[i].name == user.name){
          if(val[i].password == user.password)
          {
            this.set(val[i].username);
            this.router.navigate(['/home']);
          }
        }
      }
    });
  }
}
