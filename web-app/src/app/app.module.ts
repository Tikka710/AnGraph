import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommentDatePipe } from './pipes/comment-date.pipe';
import { CommentService } from './service/comment.service';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CommentDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
