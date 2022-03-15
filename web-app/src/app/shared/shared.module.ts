import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentDatePipe } from '../pipes/comment-date.pipe';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    CommentDatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    FormsModule,
    CommentDatePipe
  ]
})
export class SharedModule { }
