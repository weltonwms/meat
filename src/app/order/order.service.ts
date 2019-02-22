import {CartService} from '../restaurant-details/cart/cart.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Order } from './order.model';
import { Observable } from 'rxjs';


@Injectable()
export class OrderService{
    valorFrete:number=10;

    constructor(private cartService:CartService, private http:HttpClient){}

    items(){
        return this.cartService.getList();
    }

    decrementItem(item){
        return this.cartService.decrementItem(item);
    }

    incrementItem(item){
        return this.cartService.incrementItem(item);
    }

    removeItem(item){
        return this.cartService.removeItem(item);
    }

    totalItens(){
        return this.cartService.total();
    }

    total(){
        return this.totalItens()+ this.valorFrete;
    }

    checkOrder(order:Order):Observable<any>{
        let url= "http://localhost:3000";
        return this.http.post(url+"/orders", order);
    }

    clear(){
        this.cartService.limpar();
        
    }

   

}