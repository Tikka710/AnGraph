import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, Item} from './service/api.service';
import { Comment,ResponseComment } from './models/comment';
import { CommentService } from './service/comment.service'
import { NgForm } from '@angular/forms';
import { User } from './class/user';


const CURRENT_USER: User = new User(10, 'Alice');
@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';
  
  public $items!: Observable<Item>
  // items!: Item[]

  comes$!: Comment[]
  public comments$!: Observable<Comment>
  currentUser = CURRENT_USER;
  form!: NgForm


  constructor(private api:ApiService, private comment: CommentService){}
  
  setComment(form: Comment): void{
    this.comment.addComment(form).subscribe(
      res => {
        console.log(res);
        
      }
    )
  }

  updateComment(form: Comment): void{
    this.comment.updateComment(form).subscribe(res => {
      console.log(res)
    })
  }

  deleteComment(form: Comment): void{
    this.comment.deleteComment(form).subscribe(res => {
      console.log(res)
    })
  }

  // getComments(): void{
  //   this.comment.getComments().subscribe(res => {
  //     this.comments$ = res.comments
  //   })
  // }

  ngOnInit(): any{
    this.$items = this.api.getUsers();
    // this.comments$ = this.comment.getComments()
    this.comment.getComments().subscribe((res: any) => {
       this.comes$ = res.comments
       console.log(this.comes$)
    })
    
  }
}
