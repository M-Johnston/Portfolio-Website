import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoSectionComponent} from './info-section/info-section.component';
import {HomeCircularComponent} from './home-circular/home-circular.component';


const routes: Routes = [
  {
    path: '',
    component: HomeCircularComponent,
    data: {title: 'Demo', animation: 'HomePage'}
  },
  {
    path: 'info',
    component: InfoSectionComponent,
    data: {title: 'Demo', animation: 'InfoPage'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
