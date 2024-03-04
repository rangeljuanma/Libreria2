import { Observable } from 'rxjs';

export interface DaoLibreria<T, K>{

  list? : Array<T>;

  getAll(): Observable<Array<T>>;

  delete(k: K): Observable<Boolean>;

  getByID(k : K): Observable<Array<T>>;

  update(t : T): Observable<T | null>;

  create(t: T): Observable<T | null>;

}
