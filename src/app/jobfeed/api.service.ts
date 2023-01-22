import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JobfeedComponent } from './jobfeed.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchkey=new BehaviorSubject('')  //to pass stream of data
  constructor(private http:HttpClient) { }


  getjobs(){
return this.http.get('http://localhost:3000/all-jobs')
  }


  // addtowishlist
  addtowishlist(jobs:any){
    const body={
      id: jobs.id,
      title: jobs.title,
      company: jobs.company,
      place: jobs.place,
      salary: jobs.salary
    }
    return this.http.post('http://localhost:3000/addtowishlist',body)

  }
//get from wishlist
  getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')

  }


  //get form applied jobs

  getapplied(){
    return this.http.get('http://localhost:3000/getappliedjobs')

  }


  //addtoappliedjobs
  addtoapplied(jobs:any){
    const body={
      id: jobs.id,
      title: jobs.title,
      company: jobs.company,
      place: jobs.place,
      salary: jobs.salary
    }
    return this.http.post('http://localhost:3000/addtoappliedjobs',body)

  }


    //addtoappliedjobs
    backtoapplied(jobs:any){
      const body={
        id: jobs.id,
        title: jobs.title,
        company: jobs.company,
        place: jobs.place,
        salary: jobs.salary
      }
      return this.http.post('http://localhost:3000/backtoapplied',body)
  
    }
  
    deletefromwish(id:any){
      return this.http.delete('http://localhost:3000/deletwish/'+id)
  
    }
  

}
