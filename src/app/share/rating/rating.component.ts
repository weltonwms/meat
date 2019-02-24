import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rates:Array<number>=[1,2,3,4,5];
  @Output()rated: EventEmitter<number>= new EventEmitter();
  @Input() rate:number=1;
  previousRate:number;

  constructor() { }

  ngOnInit() {
  }

  setRate(r:number){
    this.rate=r;
    this.rated.emit(this.rate);
    this.previousRate=undefined;
  }

  setTemporaryRate(r:number){
    this.previousRate=this.rate;
    this.rate=r;
  }

  rollbackTemporaryRate(){
    if(this.previousRate!=undefined){
      this.rate=this.previousRate;
      this.previousRate=undefined;
    }
  }

  

 

}
