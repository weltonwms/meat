import { Component, OnInit, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  
  finishRate:number;
  OrderId;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.OrderId=this.route.snapshot.params.id;
  }

  setFinishRate(event:number){
    this.finishRate=event;
    //momento para salvar a avaliação no backend
  }

}
