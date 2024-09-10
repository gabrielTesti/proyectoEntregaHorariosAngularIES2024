import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor-fechas',
  templateUrl: './convertidor-fechas.component.html',
  styleUrls: ['./convertidor-fechas.component.css']
})
export class ConvertidorFechasComponent {
fechaInput: string = "";
resultado: string = "";



//metodo que convierte la fecha a formato en barras Y/M/D
convertirFechaString(fecha: Date): string{
if (fecha == undefined){
 return "Fecha no válida"
}
const date = new Date(fecha);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const day = ('0' + date.getDate()).slice(-2); 

    return `${year}/${month}/${day}`;
}


//metodo que se llama cuando tocamos el boton en el html
  convertirFecha(): void {
    if (this.fechaInput) {
      const fecha = new Date(this.fechaInput); 
      this.resultado = this.convertirFechaString(fecha);  
    } else {
      this.resultado = 'ingresar una fecha valida';  
    }
  }

}


