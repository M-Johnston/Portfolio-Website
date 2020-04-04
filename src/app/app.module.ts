import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { ParallaxDirective } from './parallax.directive';
import { HomeCircularComponent } from './home-circular/home-circular.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoSectionComponent,
    ParallaxDirective,
    HomeCircularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
