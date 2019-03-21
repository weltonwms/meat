import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';

import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { LoginComponent } from './security/login/login.component';
import {LoggedinGuard} from './security/loggedin.guard';
import {  } from './about/about.module';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about',loadChildren:'./about/about.module#AboutModule'},
  {path:'restaurants/:id',component:RestaurantDetailsComponent,
   children:[
    {path:'menu', component:MenuComponent},
    {path:'reviews', component:ReviewsComponent},
    {path:'', redirectTo:'menu', pathMatch:'full'}
  ]},
  {path:'order', loadChildren:'./order/order.module#OrderModule',
    canActivate:[LoggedinGuard], canLoad:[LoggedinGuard]
  },
  {path:'order_summary/:id', component:OrderSummaryComponent},
  {path:'restaurants', component:RestaurantsComponent},
  {path:'login/:page', component:LoginComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
