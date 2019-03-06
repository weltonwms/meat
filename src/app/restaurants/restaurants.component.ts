import { Component, OnInit, Injectable } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { tap, debounceTime, switchMap, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations:[
    trigger('appear',[
      state('visible', style({opacity:"1"})),
      state('void', style({opacity:0, transform:"translate(-30px, -10px)"})),
      transition("void=>visible", animate("300ms 0s ease-in-out") ) 
    ]),
    trigger('animeSearchBar',[
      state('hidden',style({opacity:0, maxHeight:'0px'})),
      state('visible',style({opacity:1, maxHeight:'70px', marginTop:'20px'})),
      transition('*=>*', animate("250ms 0s ease-in-out"))
    ])
  ]//fim animations
})


export class RestaurantsComponent implements OnInit {
  restaurants:any=[];
  searchForm:FormGroup;
  inputSearch:FormControl;
  searchState:string="hidden";

  constructor(private restaurantsService:RestaurantsService,
            private fb:FormBuilder) { }

  ngOnInit() {
    this.inputSearch= this.fb.control('');
    this.searchForm= this.fb.group({
      inputSearch: this.inputSearch
    })

    this.inputSearch.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(searchTerm=>console.log(searchTerm)),
      switchMap(searchTerm=>this.restaurantsService.restaurants(searchTerm))
    ).subscribe(restaurants=>{
      this.restaurants=restaurants;
    });

    this.restaurantsService.restaurants().subscribe((restaurants)=>{
      this.restaurants=restaurants;
    })
  }

  toggleSearchState(){
    
    this.searchState= this.searchState==="visible"?"hidden":"visible";
    
  }

}
