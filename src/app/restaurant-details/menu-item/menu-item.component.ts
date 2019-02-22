import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {trigger,state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations:[
    trigger('showEfect',[
      state('visible', style({opacity:1})),
      state('void', style({opacity:0, transform:"translateY(-30px)"})),
      transition('void=>visible', animate('600ms 0s ease-out'))
    ]) // fim da trigger
  ] //fim animations
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem:any;
  @Output() onAddMenuItem:EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  disparaOnAddMenuItem(menuItem){
    this.onAddMenuItem.emit(menuItem)
   
  }

  

}
