import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './Model/User';

@Injectable({
  providedIn: 'root'
})
export class MyServiceOneService {
private url = 'http://localhost:8080/getallusers';
constructor(private http:HttpClient) { 
    
}
getdata(){
  return this.http.get<User[]>(this.url);
  
}


}
