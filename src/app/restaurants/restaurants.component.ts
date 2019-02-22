import { Component, OnInit, Injectable } from '@angular/core';
import { RestaurantsService } from './restaurats.service';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations:[
    trigger('appear',[
      state('visible', style({opacity:"1"})),
      state('void', style({opacity:0, transform:"translate(-30px, -10px)"})),
      transition("void=>visible", animate("300ms 0s ease-in-out") ) 
    ])
  ]//fim animations
})


export class RestaurantsComponent implements OnInit {
  restaurants:any=[];


  constructor(private restauratsService:RestaurantsService) { }

  ngOnInit() {
    this.restauratsService.restaurants().subscribe((restaurants)=>{
      this.restaurants=restaurants;
    })
  }

}
