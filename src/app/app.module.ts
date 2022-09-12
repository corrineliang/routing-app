import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverscollBehaviorDemoComponent } from './overscoll-behavior-demo/overscoll-behavior-demo.component';
import { SubGridDemoComponent } from './sub-grid-demo/sub-grid-demo.component';
import { CssGridLayoutComponent } from './css-grid-layout/css-grid-layout.component';
import { TableLayoutComponent } from './table-layout/table-layout.component';
import { StickyCssComponent } from './sticky-css/sticky-css.component';

@NgModule({
  declarations: [
    AppComponent,
    OverscollBehaviorDemoComponent,
    SubGridDemoComponent,
    CssGridLayoutComponent,
    TableLayoutComponent,
    StickyCssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
