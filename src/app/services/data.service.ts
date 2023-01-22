import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  register(username:any,mail:any,password:any){
    const data={username,mail,password}
    return this.http.post('http://localhost:3000/register',data)

  }
}
