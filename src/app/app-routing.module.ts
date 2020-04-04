import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoSectionComponent} from './info-section/info-section.component';


const routes: Routes = [
  {
    path: 'info',
    component: InfoSectionComponent,
    data: {title: 'Demo'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
