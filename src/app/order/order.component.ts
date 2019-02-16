import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  ngOnInit() {
  }

  decrementItem(item){
    return this.orderService.decrementItem(item);
  }

  incrementItem(item){
    return this.orderService.incrementItem(item);
  }

  removeItem(item){
    return this.orderService.removeItem(item);
  }

  
  valorFrete(){
    return this.orderService.valorFrete;
  }

  valorItens(){
    return this.orderService.totalItens();
  }
}
