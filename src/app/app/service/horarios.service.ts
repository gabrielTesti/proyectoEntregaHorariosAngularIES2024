import { Injectable } from '@angular/core';
import { Horario } from '../interface/horario';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  private horariosMaterias: Horario[] = [
  {hora: '08:00 - 08:40', lunes: 'PP2', martes: 'Derecho y legislación laboral', miercoles: 'BDD2', jueves: 'PP2', viernes: ''},
  {hora: '08:40 - 09:20', lunes: 'PP2', martes: 'Derecho y legislación laboral', miercoles: 'BDD2', jueves: 'PP2', viernes: 'Gestión de proyectos'},
  {hora: '09:20 - 10:00', lunes: 'PP2', martes: 'Derecho y legislación laboral', miercoles: 'BDD2', jueves: 'PP2', viernes: 'Gestión de proyectos'},
  {hora: '10:00 - 10:40', lunes: 'Redes y comunicación', martes: 'Programación 2', miercoles: 'BDD2', jueves: 'Programación 2', viernes: 'Gestión de proyectos'},
  {hora: '10:40 - 11:20', lunes: 'Redes y comunicación', martes: 'Programación 2', miercoles: '', jueves: 'Programación 2', viernes: 'Gestión de proyectos'},
  {hora: '11:20 - 12:00', lunes: 'Redes y comunicación', martes: 'Programación 2', miercoles: '', jueves: 'Programación 2', viernes: ''},
  {hora: '12:00 - 12:40', lunes: 'Redes y comunicación', martes: '', miercoles: '', jueves: '', viernes: ''}
  ];



  obtenerHorarios(): Horario[]{
    return this.horariosMaterias;
  }




 
  agregarHorarios(horario: Horario): number {
    console.log('llamado', horario);
    try {
      this.horariosMaterias.push(horario);
      return 1; 
    } catch (error) {
      console.log('Error al agregar horario:', error);
      return -1; 
    }
  }
  

  

  constructor() { }












}
