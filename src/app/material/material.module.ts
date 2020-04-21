import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatDatepickerModule, MatDialogModule, MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatListModule, MatNativeDateModule, MatOptionModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatTableModule,
  MatTooltipModule,
  MatDialogModule,
  MatCardModule,
  MatExpansionModule
];

@NgModule({
  imports: [
    MATERIAL_COMPONENTS
  ],
  exports: [
    MATERIAL_COMPONENTS
  ]
})
export class MaterialModule { }
