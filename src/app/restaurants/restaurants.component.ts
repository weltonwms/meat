import { Component, OnInit, Injectable } from '@angular/core';
import { RestaurantsService } from './restaurats.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
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
