import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

const MAT_MODULES = [
  MatButtonModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MAT_MODULES
  ],
  exports: [
    ...MAT_MODULES
  ]
})
export class AppMaterialModule { }
