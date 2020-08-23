import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatMenuModule, MatListModule , MatIconModule , MatDividerModule,MatGridListModule, MatButtonToggleModule , MatButtonModule , MatFormFieldModule , MatInputModule ,MatAutocompleteModule, MatChipsModule } from '@angular/material';

const MaterialComponent = [
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatChipsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MaterialComponent
  ],
  exports : [MaterialComponent]
})
export class MaterialModule { }
