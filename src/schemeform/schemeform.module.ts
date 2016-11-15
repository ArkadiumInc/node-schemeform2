import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule }                   from '@angular/material';

NgModule({
  imports: [ CommonModule
           , FormsModule
           , ReactiveFormsModule
           , MaterialModule
           ]
})
export class SchemeFormModule {}
