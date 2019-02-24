import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

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
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { SnackbarComponent } from './share/messages/snackbar/snackbar.component';
import { InputComponent } from './share/input/input.component';
import { RadioComponent } from './share/radio/radio.component';
import { RatingComponent } from './share/rating/rating.component';
import { OrderService } from './order/order.service';
import { NotificationService } from './share/messages/notification.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

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
    MenuItemComponent,
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    SnackbarComponent,
    InputComponent,
    RadioComponent,
    RatingComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [RestaurantsService, CartService, OrderService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
