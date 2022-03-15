import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CommentService } from '../service/comment.service';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [CommentService],
})
export class CoreModule { }
