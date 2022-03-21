import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { Comment,ResponseComment } from '../models/comment';
import { CommentService } from '../service/comment.service'
import { NgForm } from '@angular/forms';
import { User } from '../class/user';


const CURRENT_USER: User = new User(1, 'Alice');
const ANOTHER_USER: User = new User(2, 'Nana');

@Component({
  selector: 'ac-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'web-app';

  comes$!: Comment[]
  public comments$!: Observable<Comment>
  currentUser = CURRENT_USER;
  anotherUser = ANOTHER_USER;
  form!: NgForm


  constructor(private api:ApiService, private comment: CommentService) { }

  
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

  ngOnInit(): void {
    this.comment.getComments().subscribe((res: any) => {
      this.comes$ = res.comments
      console.log(this.comes$)
   })
  }


}
