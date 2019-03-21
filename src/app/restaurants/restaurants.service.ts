import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Restaurant } from './restaurant/restaurant.model';
import {MEAT_API} from '../meat.api';

@Injectable()
export class RestaurantsService{
    constructor(private http:HttpClient){}

    restaurants(query?:string):Observable<any>{
        let url= MEAT_API+"/restaurants";
        if(query){
            url+=`?q=${query}`;
        }
        return this.http.get(url);
    }

    restaurant(id:string):Observable<any>{
        let url= MEAT_API+"/restaurants/"+id;
        return this.http.get(url);
    }

    menu(id:string){
        let url= MEAT_API+"/restaurants/"+id+"/menu";
        return this.http.get(url);
    }

    reviews(id:string){
        let url= MEAT_API+"/restaurants/"+id+"/reviews";
        return this.http.get(url);
    }
}