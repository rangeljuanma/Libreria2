import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from "rxjs";
import { DaoLibreria } from "../interfaces/dao/dao.interface";
import { Edicion } from "../interfaces/libreria.interface";
import { entornos } from "../entornos/entornos.dev";


export class EditorSerivice implements DaoLibreria<Edicion,string>{
  private prefixUrl  : string = entornos.prefixUrl;
  private endPoint : string = entornos.endPoint.edicion;
  list?: Edicion[] | undefined;

  constructor(private http : HttpClient){ }

  getAll(): Observable<Edicion[]> {
    return this.http.get<Array<Edicion>>(`${this.prefixUrl}/${this.endPoint}`)
    .pipe(
      catchError( () => of([]))
    );
  }
  delete(k: string): Observable<Boolean> {
    throw new Error("Method not implemented.");
  }
  getByID(k: string): Observable<Edicion[]> {
    throw new Error("Method not implemented.");
  }
  update(t: Edicion): Observable<Edicion | null> {
    throw new Error("Method not implemented.");
  }
  create(t: Edicion): Observable<Edicion | null> {
    throw new Error("Method not implemented.");
  }

}
