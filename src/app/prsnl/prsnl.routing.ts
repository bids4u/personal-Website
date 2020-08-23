import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const prsnlRoute: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },

];
@NgModule({
    imports: [RouterModule.forChild(prsnlRoute)],
    exports: [RouterModule]
})
export class PrsnlRoutingModule {

}
