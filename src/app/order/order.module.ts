import {NgModule} from "@angular/core";
import { OrderComponent } from './order.component';
import {RouterModule,Routes} from '@angular/router';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

import {ShareModule} from '../share/share.module';

const routes:Routes=[
    {path:'',component:OrderComponent}
]
@NgModule({
    declarations:[OrderComponent, OrderItemsComponent,
        DeliveryCostsComponent],
    imports:[
        RouterModule.forChild(routes),
        ShareModule
        
    ]
})
export class OrderModule{}