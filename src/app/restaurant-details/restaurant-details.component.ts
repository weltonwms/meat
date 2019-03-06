import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants/restaurants.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html'
})
export class RestaurantDetailsComponent implements OnInit {

  restaurant:any;

  constructor(private restaurantsService:RestaurantsService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    const id= this.route.snapshot.params.id;
    this.restaurantsService.restaurant(id).subscribe((restaurant)=>{
      this.restaurant= restaurant;
    })
  }

 

}
