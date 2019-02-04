import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/restaurants/restaurats.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
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

  x1(){
    alert('x1');
  }

}
