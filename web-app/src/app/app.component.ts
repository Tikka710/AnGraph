import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, Item} from './service/api.service';
import { Comment } from './models/comment';
import { CommentService } from './service/comment.service'
// import { Comment } from './class/comment'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';
  
  public $items!: Observable<Item>
  // items!: Item[]
  public comments$!: Observable<Comment>
  form!: NgForm


  constructor(private api:ApiService, private comment: CommentService){}
  
  setComment(form: Comment): void{
    this.comment.addComment(form).subscribe(
      res => {
        console.log(res);
        
      }
    )
  }

  // getComments(): void{
  //   this.comment.getComments().subscribe(res => {
  //     this.comments$ = res.comments
  //   })
  // }

  ngOnInit(): void{
    this.$items = this.api.getUsers();
    this.comments$ = this.comment.getComments()
  }
}
