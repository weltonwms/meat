import {CartService} from '../restaurant-details/cart/cart.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Order } from './order.model';
import { Observable } from 'rxjs';
import {MEAT_API} from '../meat.api';
import { LoginService } from '../security/login/login.service';

@Injectable()
export class OrderService{
    valorFrete:number=10;

    constructor(private cartService:CartService, 
        private http:HttpClient,
        private loginService:LoginService){}

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
        let headers= new HttpHeaders();
       if(this.loginService.isUserLogged()){
            headers= headers.
                    set('Authorization',`Bearer ${this.loginService.userLogged.acessToken}`);
         
            
       }
       return this.http.post(MEAT_API+"/orders", order,{headers});
       
    }

    clear(){
        this.cartService.limpar();
        
    }

   

}