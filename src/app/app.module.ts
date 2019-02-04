import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './restaurants/restaurats.service';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';
import { CartComponent } from './restaurant-details/cart/cart.component';
import { MenuItemComponent } from './restaurant-details/menu-item/menu-item.component';
import { CartService } from './restaurant-details/cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    MenuComponent,
    ReviewsComponent,
    CartComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RestaurantsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
