import { Injectable } from '@angular/core';
import {MEAT_API} from '../../meat.api';
import {HttpClient} from '@angular/common/http';
import {User} from '../user.model';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class LoginService{
    userLogged:User;

    constructor(private http:HttpClient,
                private router:Router){}

    isUserLogged():boolean{
        console.log(this.userLogged);
        return this.userLogged!=undefined;
    }

    login(email:string, password:string):Observable<User>{
       return this.http.post(`${MEAT_API}/login`,{email,password})
        .pipe(
            tap((user:User)=>this.userLogged=user)
        );
       
    }

    handleLogin(path='/'){
        this.router.navigate(['/login',path])
    }

}