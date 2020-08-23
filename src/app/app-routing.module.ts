import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/prsnl/home',
    pathMatch: 'full'
},{
  path: 'prsnl',
  loadChildren: './prsnl/prsnl.module#PrsnlModule'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
