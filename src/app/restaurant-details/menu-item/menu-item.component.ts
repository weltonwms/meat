import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
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
