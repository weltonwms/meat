import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrderService } from '../order.service';


@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Output() onDecrementItem= new EventEmitter();
  @Output() onIncrementItem= new EventEmitter();
  @Output() onRemoveItem= new EventEmitter();

  constructor(private orderService: OrderService) { }

  ngOnInit() {

  }

  items() {
    return this.orderService.items();
  }

  emitDecrement(item) {
    this.onDecrementItem.emit(item);
  }

  emitIncrement(item){
    this.onIncrementItem.emit(item);
  }

  emitRemoveItem(item){
    this.onRemoveItem.emit(item);
  }

}
