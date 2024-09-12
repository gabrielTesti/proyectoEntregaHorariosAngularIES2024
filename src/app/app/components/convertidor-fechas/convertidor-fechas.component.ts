import { Component } from '@angular/core';
import { FechaService } from '../../service/fecha.service';

@Component({
  selector: 'app-convertidor-fechas',
  templateUrl: './convertidor-fechas.component.html',
  styleUrls: ['./convertidor-fechas.component.css']
})
export class ConvertidorFechasComponent {
  fechaOriginal: string = ""  //almacena la fecha actual al crear el componente
  fechaConBarras: string = "";
  fechaConGuion: string = "";
  formatoActual: "barras" | "guiones" = "guiones"
  textoBoton: string = "Cambiar a formato con guiones"

  


  constructor(private fechaService: FechaService){
  }



 convertirFecha() {
    if (this.formatoActual === 'guiones') {
      this.fechaConBarras = this.fechaService.fechaGuionABarra(this.fechaOriginal);
      this.fechaConGuion = ""; 
    } else {
      this.fechaConGuion = this.fechaService.fechaBarraAGuion(this.fechaOriginal);
      this.fechaConBarras = ""; 
    }
  } 

  cambiarFormato() {
    if (this.formatoActual === 'guiones') {
      this.fechaConGuion = this.fechaService.fechaBarraAGuion(this.fechaConBarras);
      this.fechaConBarras = ""; 
      this.formatoActual = 'barras';
      this.textoBoton = 'Convertir a formato con barras';
    } else {
      this.fechaConBarras = this.fechaService.fechaGuionABarra(this.fechaConGuion);
      this.fechaConGuion = ""; 
      this.formatoActual = 'guiones';
      this.textoBoton = 'Convertir a formato con guiones';
    }
  }



}


