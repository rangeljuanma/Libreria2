import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAutorComponent } from './pages/new-autor/new-autor.component';
import { AutorRoutingModule } from './autor-routing.module';
import { ListAutorComponent } from './pages/list-autor/list-autor.component';
import { EditAutorComponent } from './pages/edit-autor/edit-autor.component';
import { LayoutAutorComponent } from './pages/layout-autor/layout-autor.component';




@NgModule({
  declarations: [
    NewAutorComponent,
    ListAutorComponent,
    EditAutorComponent,
    LayoutAutorComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
  ],
  exports:[
    AutorRoutingModule
  ]
})
export class AutorModule { }
