import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { MenubarComponent } from './menubar/menubar.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';




@NgModule({
  declarations: [
    MenubarComponent,
    SearchboxComponent,
    HomeComponent,
    Error404Component,
    LazyImageComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule
  ],
  exports:[
    MenubarComponent,
    HomeComponent,
    Error404Component,
    LazyImageComponent]
})
export class SharedModule { }
