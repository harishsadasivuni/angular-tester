import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formPost',
  templateUrl: './formPost.component.html',
  styleUrls: ['./formPost.component.css']
})
export class FormPostComponent implements OnInit {

  constructor(private http:HttpClient) { }
  posturl:string = "http://localhost:8080/addusers";
  formstaticsubmit(formdata: HTMLInputElement){
    this.http.post(this.posturl, formdata)
    .subscribe();
    }

  

  ngOnInit() {
  }

}
