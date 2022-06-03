import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelnamesComponent } from './hotelnames/hotelnames.component';
import { RouterModule,Routes } from '@angular/router';

import { FeedbackComponent } from './feedback/feedback.component';
import { RatingComponent } from './rating/rating.component';

const routes:Routes=[
  
  {path:'hotelnames',component:HotelnamesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelnamesComponent,
  
    FeedbackComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


 


