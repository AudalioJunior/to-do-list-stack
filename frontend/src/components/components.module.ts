import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AppComponent } from 'src/app/app.component';



@NgModule({
  declarations: [
    CardComponent
    
  ],
  imports: [
    CommonModule
  ], exports:[
    CardComponent
  ]
})
export class ComponentsModule { }
