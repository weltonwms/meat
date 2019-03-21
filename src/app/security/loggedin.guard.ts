import {LoginService} from './login/login.service';
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedinGuard implements CanActivate, CanLoad{
    constructor(private loginService:LoginService){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
        //console.log(route.routeConfig.path);
        if(!this.loginService.isUserLogged()){
            this.loginService.handleLogin(route.routeConfig.path);
            return false;
        }
       return true;
    }

    canLoad(route:Route):boolean{
        if(!this.loginService.isUserLogged()){
            this.loginService.handleLogin(route.path);
            return false;
        }
       return true;
    }
}