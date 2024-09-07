import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from "@angular/material/tooltip"
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatSelectModule,
    MatTableModule
  ],
  exports:[MatTooltipModule,MatSelectModule,MatTableModule]
})
export class MaterialModule { }
