import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  animations:[
    trigger('showEfect',[
      state('visible', style({opacity:1})),
      state('void', style({opacity:0, transform:"translateX(-40px) "})),
      transition('void=>visible', animate('600ms 0s ease-out'))
    ])//fim da trigger
  ] //fim animations
})
export class ReviewsComponent implements OnInit {

  reviews:Observable<any>;
  
  constructor(private restaurantsService:RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id= this.route.parent.snapshot.params.id;
    // this.restaurantsService.reviews(id).subscribe(reviews=>{
    //   this.reviews= reviews;
    // });

    this.reviews= this.restaurantsService.reviews(id); //usando pipe async no template
  }

  ratingImage(rating){
    let image= "assets/img/reactions/";
    if(rating>=4){
      image+="loved.png";
    }
    else if(rating >=3){
      image+="soso.png";
    }
    else{
      image+="pissed.png";
    }
    return image;
  }

 

}
