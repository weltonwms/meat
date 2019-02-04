import { MenuItem } from '../menu-item/menu-item.model';
import { Cart } from './cart.model';

export class CartService{
    cartList=[]

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
    }

    removeItem(cartItem:Cart){
        const indexCart= this.cartList.indexOf(cartItem);
        this.cartList.splice(indexCart,1);
    }
}