import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms"
import {HttpClient} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";


@Component({
  selector: 'ac-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private base_url: string = 'http://localhost:3000'
  
  // form = new FormGroup({
  //   email: new FormControl("", Validators.required),
  //   name: new FormControl("", Validators.required)
  // })
  constructor( private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


  signup(form: NgForm): void{
    console.log(form.value)
    if(!form.value){
      alert("すべてのフォームを埋めてください。")
      return
    }
    this.http.post(`${this.base_url}/signup`, form.value).subscribe({next: (r) => {
      return this.router.navigateByUrl('/')
    }
  })

  }

}


