import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list.component';
import { ItemComponent } from './components/item/item.component';
import { DetailComponent } from './components/detail/detail.component';

import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { AppRoutingModule } from '../app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    ListComponent,
    ItemComponent,
    DetailComponent
  ],
  providers: [
    ApiService,
    StoreService
  ]
})
export class ListModule { }
