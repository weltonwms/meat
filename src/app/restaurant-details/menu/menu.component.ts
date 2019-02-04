import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/restaurants/restaurats.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu:any=[]
  constructor(private restaurantsService:RestaurantsService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    const id=this.route.parent.snapshot.params.id;
    console.log(id);
    this.restaurantsService.menu(id).subscribe(menu=>{
      this.menu=menu;
    })
  }

 

}
