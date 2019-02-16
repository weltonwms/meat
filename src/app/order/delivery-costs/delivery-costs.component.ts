import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {
  @Input() valorItens:number;
  @Input() valorFrete:number;
  

  constructor() { }

  ngOnInit() {
  }

  valorTotal(){
    return this.valorItens + this.valorFrete;
  }

}
