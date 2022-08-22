import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { OverscollBehaviorDemoComponent } from './overscoll-behavior-demo/overscoll-behavior-demo.component';
import { SubGridDemoComponent } from './sub-grid-demo/sub-grid-demo.component';

const routes: Routes = [
  { path: 'overscroll-behavior', component: OverscollBehaviorDemoComponent },
  { path: 'sub-grid', component: SubGridDemoComponent },
  {path: '', redirectTo: '/overscroll-behavior', pathMatch: 'full'}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
