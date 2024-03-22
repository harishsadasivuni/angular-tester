import { Component } from '@angular/core';
import { MyServiceOneService } from './my-service-one.service';
import { User } from './Model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularbasic';
  data:string = "Harish";
  name:string = "Ravi";
  carcount:number = 0;
  pointer:string = "";
  urldyn:string = "/staticform"
  flagmorethan5:boolean = false;
  getval(){
    return "Hello Harish"
  }
  getname(){
    this.pointer="Harish Sadasivuni";
  }
  printdata(name:string){
    if(name!=""){
    this.name = name;
    this.variablerenderprop =  "rendergreen";}
  }
  businesslogicforcarcount(carcount:number){
    if(carcount>5){
      this.flagmorethan5 = true;}
  }
  variablerenderprop:string = "render";
  //arrays
  toDos: string[] =["Todo1","Todo2","Todo3"];
aparna:string ="Aparna Darapaeni";  

sendhtml(inputtwohtml: HTMLInputElement) {
  console.log(inputtwohtml.value);
  }
  constructor(private MyServiceOneService: MyServiceOneService) { }
  public alien:any = "";
  Users: User[] = [];
  ngOnInit(){
        this.MyServiceOneService.getdata().subscribe(
          info => this.Users=info
        )
      }
      
      
}
