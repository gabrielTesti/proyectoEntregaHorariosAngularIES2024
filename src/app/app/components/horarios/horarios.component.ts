import { Component, OnInit } from '@angular/core';
import { HorariosService } from '../../service/horarios.service';
import { Horario } from '../../interface/horario';
import { Dia } from '../../interface/horario';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

diaSeleccionado: Dia = "todos"; //valor predeterminado para la seleccion del dia
horarios: any[] = [] //aqui se almacenaran los horarios recuperados del servicio
displayedColumns: string[] = ["hora"];

constructor(private horariosService: HorariosService){}

ngOnInit(): void {
  this.cargarHorariosFiltrados(this.diaSeleccionado);
}


cargarHorarios(): void{
  this.horarios = this.horariosService.obtenerHorarios();
  this.actualizarColumnas(); 
}




  filtrarHorarios(dia: string) {
    if (dia === 'todos') {
        this.displayedColumns = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    } else {
        this.displayedColumns = ['hora', dia];
    }
}



  cargarHorariosFiltrados(dia: Dia): void {
    if (dia === 'todos') {
      this.horarios = this.horariosService.obtenerHorarios();
      this.displayedColumns = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    } else {
      this.horarios = this.horariosService.obtenerHorarios().filter(horario => horario[dia] !== '');
      this.displayedColumns = ['hora', dia];
    }
  }
  
actualizarColumnas(): void {
  if (this.diaSeleccionado !== 'todos') {
    this.displayedColumns = ['hora', this.diaSeleccionado];
  } else {
    this.displayedColumns = ['hora'];
  }
}

}
