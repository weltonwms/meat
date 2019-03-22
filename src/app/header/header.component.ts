import { Component, OnInit } from '@angular/core';
import { LoginService } from '../security/login/login.service';

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html',
  styles:[
    `
    .user-menu>span{ /**/
      position: relative;
      display: block;
      padding: 15px 15px;
      color: #fff;
    }

    .user-menu a{
      color: #fff;
      cursor: pointer
    }

    @media (max-width: 991px){
      .navbar-custom-menu {
          display: block;
          position: absolute;
          top: 0;
          right: 40px;
        }
    }
    `
  ]
})

export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
   
  }

  login(){
    this.loginService.handleLogin();
  }

  user(){
    return this.loginService.userLogged;
  }

  logout(){
    this.loginService.logout();
  }

  isUserLogged(){
    return this.loginService.isUserLogged()
  }

}
