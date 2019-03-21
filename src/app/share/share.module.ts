import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'

import {OrderService} from '../order/order.service'
import {CartService} from '../restaurant-details/cart/cart.service'
import {RestaurantsService} from '../restaurants/restaurants.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import {NotificationService} from './messages/notification.service'
import { LoginService } from '../security/login/login.service';
import { LoggedinGuard } from '../security/loggedin.guard';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent,SnackbarComponent,
            RatingComponent, CommonModule,
            FormsModule, ReactiveFormsModule ]
})
export class ShareModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShareModule,
      providers:[CartService, RestaurantsService, 
        OrderService, NotificationService, LoginService,LoggedinGuard]
    }
  }
}