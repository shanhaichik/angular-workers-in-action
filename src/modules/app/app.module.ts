import { WORKER_APP_LOCATION_PROVIDERS, WorkerAppModule } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from '../main/main.module';
import { ListModule } from '../list/list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WorkerAppModule,
    MainModule,
    ListModule,
    AppRoutingModule
  ],
  providers: [
    WORKER_APP_LOCATION_PROVIDERS,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
