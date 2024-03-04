import { DaoLibreria } from './../interfaces/dao/dao.interface';
import { entornos } from './../entornos/entornos.dev';
import { Injectable } from '@angular/core';
import { Autor } from '../interfaces/libreria.interface';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AutorService implements DaoLibreria<Autor, string>{
  private prefixURL: string = entornos.prefixUrl;
  private endPoint: string = entornos.endPoint.autor;
  list?: Autor[] | undefined;

  constructor( private http : HttpClient ) { }

  getAll(): Observable<Autor[]> {
    return this.http.get<Array<Autor>>(`${this.prefixURL}/${this.endPoint}`)
    .pipe
    (catchError(()=>of([]))
     );
  }
  delete(k: string): Observable<Boolean> {
    throw new Error('Method not implemented.');
  }
  getByID(k: string): Observable<Autor[]> {
    throw new Error('Method not implemented.');
  }
  update(t: Autor): Observable<Autor | null> {
    throw new Error('Method not implemented.');
  }
  create(t: Autor): Observable<Autor | null> {
    throw new Error('Method not implemented.');
  }

}
