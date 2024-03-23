import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formPost',
  templateUrl: './formPost.component.html',
  styleUrls: ['./formPost.component.css']
})
export class FormPostComponent implements OnInit {
  @ViewChild('alertid', { static: false }) public mydiv: ElementRef;
  constructor(private http:HttpClient) { }
  posturl:string = "http://localhost:8080/addusers";
  formstaticsubmit(formdata: HTMLInputElement){
    this.http.post(this.posturl, formdata)
    .subscribe(resp => 
      {if(resp == true){
        alert("Form submitted succesfully");
        let y = document.getElementById("loginform");
        let x = document.getElementById("alertid");
        y!.style.display = "none";
        x!.style.display = "block";
      }else{
        alert("Failed to submit form");
      }});
    }

  

  ngOnInit() {
  }

}
