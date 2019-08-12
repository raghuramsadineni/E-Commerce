import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uname="Profile";
  private name = new BehaviorSubject<string>(this.uname);
  username=this.name.asObservable();
  constructor() { }
  set(uname:string)
  {
    this.name.next(uname);
  }
}
