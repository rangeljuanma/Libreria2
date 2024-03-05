import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../interfaces/libreria.interface';
import { Observable, catchError, of } from 'rxjs';
import { entornos } from '../entornos/entornos.dev';
import { DaoLibreria } from '../interfaces/dao/dao.interface';

@Injectable({
  providedIn: 'root'
})
export class TemaService implements DaoLibreria<Tema, string>{

  private prefixUrl: string = entornos.prefixUrl;
  private endPoint: string = entornos.endPoint.temas;
  list?: Tema[] | undefined;
  constructor( private http : HttpClient) { }



  public getAll(): Observable<Tema[]>{
    return this.http.get<Array<Tema>>(`${this.baseURL}/${this.endPoint}`)
                    .pipe(
                      catchError( () => of([]))
                    );
  }

  getByID(k: string): Observable<Tema[]> {
    throw new Error('Method not implemented.');
  }

  delete(k: string): Observable<Boolean> {
    throw new Error('Method not implemented.');
  }
  update(t: Tema): Observable<Tema | null> {
    throw new Error('Method not implemented.');
  }
  create(t: Tema): Observable<Tema | null> {
    throw new Error('Method not implemented.');
  }
}
