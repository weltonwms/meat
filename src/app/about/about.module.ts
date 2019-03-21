import{NgModule} from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about.component';

const Routes:Routes=[
    {path:'', component:AboutComponent}
]
@NgModule({
    declarations:[
        AboutComponent
    ],
    imports:[
        RouterModule.forChild(Routes)
    ]
})
export class AboutModule{

}