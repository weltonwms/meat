import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './cart.model';

@Component({
  selector: 'mt-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  

  constructor(private cartService:CartService) { }

  ngOnInit() {
   
  }

  getList(){
    return this.cartService.getList();
  }

  add(menuItem){
    this.cartService.add(menuItem);
  }

  total(){
    return this.cartService.total();
  }

  limpar(){
   
    this.cartService.limpar();
  }

  removeItem(item:Cart){
      this.cartService.removeItem(item);
  };



}
