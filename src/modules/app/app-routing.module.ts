import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { ListComponent } from '../list/list.component';
import { DetailComponent } from '../list/components/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'list',
    component: ListComponent,
    children: [
      {
        path: ':id/detail',
        component: DetailComponent
      }
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
