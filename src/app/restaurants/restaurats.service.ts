import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestaurantsService{
    constructor(private http:HttpClient){}

    restaurants(){
        let url= "http://localhost:3000/restaurants";
        return this.http.get(url);
    }

    restaurant(id:string){
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