import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantsService{
    constructor(private http:HttpClient){}

    restaurants(query?:string):Observable<any>{
        let url= "http://localhost:3000/restaurants";
        if(query){
            url+=`?q=${query}`;
        }
        return this.http.get(url);
    }

    restaurant(id:string):Observable<any>{
        let url= "http://localhost:3000/restaurants/"+id;
        return this.http.get(url);
    }

    menu(id:string){
        let url= "http://localhost:3000/restaurants/"+id+"/menu";
        return this.http.get(url);
    }

    reviews(id:string){
        let url= "http://localhost:3000/restaurants/"+id+"/reviews";
        return this.http.get(url);
    }
}