import { Component, OnInit } from '@angular/core';
import { Edicion } from '../../../interfaces/libreria.interface';
import { EditorSerivice } from '../../../services/editor.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-list-edicion',
  templateUrl: './list-edicion.component.html',
  styles: ``
})
export class ListEdicionComponent implements OnInit{
  public editions: Array<Edicion> = [];
  constructor( private editorService : EditorSerivice){}
  ngOnInit(): void {
    this.editorService.getAll()
                      .subscribe(resp=>this.editions=resp);
  }
}
