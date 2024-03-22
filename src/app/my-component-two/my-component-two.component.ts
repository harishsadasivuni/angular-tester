import { Component, Input, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-my-component-two',
  templateUrl: './my-component-two.component.html',
  styleUrls: ['./my-component-two.component.css']
})
export class MyComponentTwoComponent implements OnInit {

  @Input() childvariname:string ="";

  constructor() { }

  ngOnInit() {
  }

}
