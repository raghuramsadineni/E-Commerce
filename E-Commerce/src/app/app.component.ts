import { Component,OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './services/login.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  username:string="Profile";
  ngOnInit(){
    this.login.username.subscribe(data =>{
      this.username=data;
      this.appPages[3].title=this.username;
      this.appPages[3].children=this.get();
    });
    
  }
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'ios-leaf'
    },
    {
      title: 'Cart',
      url: '/home',
      icon: 'md-cart'
    },
    {
      title: 'Categories',
      
      icon: 'list'
    },
    {
      title:this.username,
      children: this.get()
    }
  ];

  constructor(
    private router:Router,
    private login:LoginService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  get():any{
    if(this.username=="Profile")
    {
      return [
        {
          title:'Login',
          url:'/login'
        }
      ]
    }
    return [
      {
        title:'Manage Products',
        url:'/manageproducts'
      },
    ]
  }
}

