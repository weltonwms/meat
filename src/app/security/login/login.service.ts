import { Injectable } from '@angular/core';
import { MEAT_API } from '../../meat.api';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Injectable()
export class LoginService {
    userLogged: User;
    urlNavigate:string;

    constructor(private http: HttpClient, private router: Router) {
        this.router.events.pipe(
            filter(evt => evt instanceof NavigationEnd)
        ).subscribe( (e:NavigationEnd)=>this.urlNavigate=e.url);
    }

    isUserLogged(): boolean {
       return this.userLogged != undefined;
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post(`${MEAT_API}/login`, { email, password })
            .pipe(
                tap((user: User) => this.userLogged = user)
            );

    }

    handleLogin(path=this.urlNavigate) {
       this.router.navigate(['/login', path])
    }

    logout() {
        this.userLogged=undefined;
    }

}