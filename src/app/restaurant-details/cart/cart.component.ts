import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './cart.model';
import {style,trigger, state, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'mt-cart',
  templateUrl: './cart.component.html',
  animations:[
    trigger('slideInOut',[
      state('visible', style({opacity:1})),
      transition('void=>visible', animate('300ms 0s ease-in', keyframes([
        style({offset:0, opacity:0, transform:"translateX(-30px)"}),
        style({offset:0.6, opacity:'0.6', transform:"translateX(10px)"}),
        style({offset:1, opacity:1, transform:"translateX(0px)"})
      ]))), //fim transition void to visible

      transition('visible=>void', animate('300ms 0s ease-out', keyframes([
        style({offset:0, opacity:1, transform:"translateX(10px)"}),
        style({offset:0.4, opacity:'0.6', transform:"translateX(0px)"}),
        style({offset:1, opacity:0, transform:"translateX(-30px)"})
      ]))) //fim transition void to visible
    ])
  ]//fim animations
  
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
