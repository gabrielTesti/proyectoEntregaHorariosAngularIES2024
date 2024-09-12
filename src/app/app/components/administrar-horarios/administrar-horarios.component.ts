import { Component } from '@angular/core';
import { Horario } from '../../interface/horario';
import { HorariosService } from '../../service/horarios.service';

@Component({
  selector: 'app-administrar-horarios',
  templateUrl: './administrar-horarios.component.html',
  styleUrls: ['./administrar-horarios.component.css']
})
export class AdministrarHorariosComponent {



  /* horarios: Horario[] = [];

  constructor(private horariosService: HorariosService) {
    this.horarios = this.horariosService.obtenerHorarios();
  }

  eliminarHorario(hora: string) {
    this.horarios = this.horarios.filter(horario => horario.hora !== hora);
    console.log('Horario eliminado:', hora);
    
  } */



}
