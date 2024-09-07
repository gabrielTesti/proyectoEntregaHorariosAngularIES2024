import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosComponent } from './app/components/horarios/horarios.component';
import { AdministrarMateriasComponent } from './app/components/administrar-materias/administrar-materias.component';
import { ConvertidorFechasComponent } from './app/components/convertidor-fechas/convertidor-fechas.component';
const routes: Routes = [
  { path: '', redirectTo: '/horarios', pathMatch: 'full' }, 
  { path: 'horarios', component: HorariosComponent },
  { path: 'administrar-materias', component: AdministrarMateriasComponent },
  { path: 'convertidor-fechas', component: ConvertidorFechasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
