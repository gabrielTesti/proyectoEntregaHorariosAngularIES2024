import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosComponent } from './app/components/horarios/horarios.component';
import { ConvertidorFechasComponent } from './app/components/convertidor-fechas/convertidor-fechas.component';
import { AdministrarHorariosComponent } from './app/components/administrar-horarios/administrar-horarios.component';
import { AltaHorariosComponent } from './app/components/alta-horarios/alta-horarios.component';
const routes: Routes = [
  { path: '', redirectTo: '/horarios', pathMatch: 'full' }, 
  { path: 'horarios', component: HorariosComponent },
  { path: 'convertidor-fechas', component: ConvertidorFechasComponent },
  { path: 'administrar-horarios', component: AdministrarHorariosComponent },
  { path: 'administrar-horarios/alta', component: AltaHorariosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
