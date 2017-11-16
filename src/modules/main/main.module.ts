import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app/app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [MainComponent]
})
export class MainModule { }
