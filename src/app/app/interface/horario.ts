export type Dia = 'lunes' | 'martes' | 'miércoles' | 'jueves' | 'viernes' | 'todos';

export interface Horario {
    hora: string;
    lunes: string;
    martes: string;
    miercoles: string;
    jueves: string;
    viernes: string;
    [key: string]: string; // permite el uso de cualquier clave de tipo string
  }