import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TegiHomeComponent } from './tegi-home/tegi-home.component';

const routes: Routes = [
  {
    path: '',
    component: TegiHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
