export interface Course {
  alumnos:         Alumno[];
  cantidadAlumnos: number;
  capacidad?:      number;
  categoria:       string[] | string;
  categorias?:     any[];
  descripcion:     string;
  fechaFin?:       Date;
  fechaInicio?:    Date;
  fin:             Date | number;
  id?:              string;
  inicio:          Date | number;
  nombre:          string;
  precio:          number;
 }
 
 export interface Alumno {
  apellidos: string;
  codigo:    string;
  correo:    string;
  cursoId?:  string;
  email?:    string;
  id:        string;
  nombres:   string;
 }
 
 