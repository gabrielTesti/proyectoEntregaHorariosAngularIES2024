import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechaService {


  constructor() { }


convertirFechaString(fecha: Date) : string{
  const year = fecha.getFullYear();
  const month = ('0' + (fecha.getMonth() + 1)).slice(-2);
  const day = ('0' + fecha.getDate()).slice(-2);

  return `${year}/${month}/${day}`;
}


fechaBarraAGuion(fechaConBarras: string): string {
  return fechaConBarras.replace(/\//g, '-');   //     /\//g: Expresión regular que busca todas las barras /   g: es un modificador global
}

fechaGuionABarra(fechaConGuiones: string): string {
  return fechaConGuiones.replace(/-/g, '/');
}





}
