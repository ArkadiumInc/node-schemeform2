import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule }                   from '@angular/material';

import { SchemeFormComponent        } from './schemeform.component';
import { SchemeFormControlComponent } from './schemeform-control.component';

NgModule({
  imports: [ CommonModule
           , FormsModule
           , ReactiveFormsModule
           , MaterialModule
           ]
})
export class SchemeFormModule {}
