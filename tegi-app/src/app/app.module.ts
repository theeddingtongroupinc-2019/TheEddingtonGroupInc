import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { OwlModule } from 'ngx-owl-carousel';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TegiHomeComponent } from './tegi-home/tegi-home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TegiHomeComponent,
    MainNavComponent,
    AboutUsComponent,
    ContactDialogComponent,
    ImageDialogComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatRippleModule,
    MatButtonModule,
    MatSidenavModule,
    OwlModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  entryComponents: [
    ContactDialogComponent,
    ImageDialogComponent
  ],
  exports: [
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
