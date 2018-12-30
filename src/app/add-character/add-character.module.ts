import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddCharacterComponent } from './add-character.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AddCharacterComponent }
    ])
  ]
})
export class AddCharacterModule { }
