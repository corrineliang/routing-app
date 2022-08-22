import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverscollBehaviorDemoComponent } from './overscoll-behavior-demo/overscoll-behavior-demo.component';
import { SubGridDemoComponent } from './sub-grid-demo/sub-grid-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    OverscollBehaviorDemoComponent,
    SubGridDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
