import { Libro } from "./libreria.interface";

export interface ResponseLibro {
  OK:    string,
  Error: null;
  Data:  Libro | null | Boolean;
}
