import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, Item, Hello } from './service/api.service';
import { Comment } from './class/comment'
import { User } from './class/user'

const CURRENT_USER: User = new User(1, '五十嵐 傭兵')
const ANOTHER_USER: User = new User(2, '竹井 健治')


const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'お疲れ様です！'),
  new Comment(ANOTHER_USER, 'この間の件どうなりましたか？'),
  new Comment(CURRENT_USER, 'dodomo')
  // {name: '五十嵐 傭兵', message: 'お疲れ様です！！！'},
]

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';
  hello!: Observable<Hello>
  public $items!: Observable<Item>
  // items!: Item[]
  comments = COMMENTS
  currentUser = CURRENT_USER
  comment = ''
  commentDateFormat = 'yyyy/MM/dd HH:mm'


  addComment(comment: string){
    if(comment){
      this.comments.push(new Comment(this.currentUser, comment))
    }
  }
  constructor(private api:ApiService){
  }

  // getUsers(): void{
  //   this.api.getUsers().subscribe(res => {
  //     this.items = res
  //   })
  // }

  ngOnInit(): void{
    this.hello = this.api.hello$
    this.$items = this.api.getUsers();
    console.log(this.$items)
  }
}
