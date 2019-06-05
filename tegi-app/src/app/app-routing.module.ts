import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TegiHomeComponent } from './tegi-home/tegi-home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: TegiHomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
