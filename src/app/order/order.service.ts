import {CartService} from '../restaurant-details/cart/cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService{
    valorFrete:number=10;

    constructor(private cartService:CartService){}

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

   

}