import { entornos } from './../entornos/entornos.dev';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DaoLibreria } from '../interfaces/dao/dao.interface';
import { Formato } from '../interfaces/libreria.interface';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormatoService implements DaoLibreria<Formato, string>{

  private prefixUrl  : string = entornos.prefixUrl;
  private endPoint : string = entornos.endPoint.formato;
  constructor( private http: HttpClient) { }
  list?: Formato[] | undefined;


  getAll() : Observable<Array<Formato>>{
    return this.http.get<Array<Formato>>(`${this.prefixUrl}/${this.endPoint}`)
                    .pipe(
                      catchError( () => of([]))
                    );
  }
  delete(k: string): Observable<Boolean> {
    throw new Error('Method not implemented.');
  }
  getByID(k: string): Observable<Formato[]> {
    throw new Error('Method not implemented.');
  }
  update(t: Formato): Observable<Formato | null> {
    throw new Error('Method not implemented.');
  }
  create(t: Formato): Observable<Formato | null> {
    throw new Error('Method not implemented.');
  }

}
