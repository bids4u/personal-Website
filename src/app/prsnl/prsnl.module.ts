import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PrsnlRoutingModule } from './prsnl.routing';
import { MaterialModule } from '../material/material.module';


import {FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PrsnlRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrsnlModule { }
