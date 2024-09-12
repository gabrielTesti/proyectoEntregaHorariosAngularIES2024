import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { SidebarComponent } from './app/components/sidebar/sidebar.component';
import { HorariosComponent } from './app/components/horarios/horarios.component';
import { ConvertidorFechasComponent } from './app/components/convertidor-fechas/convertidor-fechas.component';
import { MaterialModule } from './app/modules/material/material.module';

import { FormsModule } from '@angular/forms';
import { AdministrarHorariosComponent } from './app/components/administrar-horarios/administrar-horarios.component';
import { AltaHorariosComponent } from './app/components/alta-horarios/alta-horarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HorariosComponent,
    ConvertidorFechasComponent,
    AdministrarHorariosComponent,
    AltaHorariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
