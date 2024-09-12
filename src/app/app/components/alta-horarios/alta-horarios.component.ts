import { Component } from '@angular/core';
import { Horario } from '../../interface/horario';
import { HorariosService } from '../../service/horarios.service';

@Component({
  selector: 'app-alta-horarios',
  templateUrl: './alta-horarios.component.html',
  styleUrls: ['./alta-horarios.component.css']
})
export class AltaHorariosComponent {
  nuevoHorario: Horario = {
    hora: '',
    lunes: '',
    martes: '',
    miercoles: '',
    jueves: '',
    viernes: ''
  };



constructor(private horariosService: HorariosService){}



  guardarHorario() {
    console.log('Formulario enviado. Nuevo horario:', this.nuevoHorario);
    
    const resultado = this.horariosService.agregarHorarios(this.nuevoHorario);
    
    if (resultado === 1) {
      alert('Horario agregado correctamente');
    } else {
      alert('Error al agregar horario');
    }
  }
  
  

borrarCampos(){
  this.nuevoHorario = {
    hora: '',
    lunes: '',
    martes: '',
    miercoles: '',
    jueves: '',
    viernes: ''
  };
}


}
