import { MenuItem } from '../menu-item/menu-item.model';
import { Cart } from './cart.model';
import { NotificationService } from 'src/app/share/messages/notification.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService{
    cartList=[];
    constructor(public notification:NotificationService){}

    add(menuItem:MenuItem){
        const cartItem:Cart=this.cartList.find((cartItem:Cart)=>{
            if(cartItem.item.id===menuItem.id){
                return true;
            }
            return false;
        });

        if(cartItem){
           cartItem.qtd++;
        }
        else{
            let newCart= new Cart(menuItem);
            this.cartList.push(newCart);
        }
        this.notification.notify(`${menuItem.name} adicionado`);
    }


    getList(){
        return this.cartList;
    }

    total(){
        return this.cartList.reduce((ant, atual)=>{
            return ant + atual.value();
        }, 0)
    }

    limpar(){
        this.cartList= [];
        this.notification.notify('Carrinho Limpo!')
    }

    removeItem(cartItem:Cart){
        const indexCart= this.cartList.indexOf(cartItem);
        this.cartList.splice(indexCart,1);
        this.notification.notify(`${cartItem.item.name} removido`)
    }

    decrementItem(cartItem:Cart){
        cartItem.qtd--;
       if(cartItem.qtd < 1){
        this.removeItem(cartItem);
       }
    }

    incrementItem(cartItem:Cart){
        cartItem.qtd++;
    }
}