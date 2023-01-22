import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppliedService {
cartarray:any=[]
cartlist=new BehaviorSubject([])
  constructor() { }
  //add to applied

  //add to applied
  addcart(job:any){
    this.cartarray.push(job);
    this.cartlist.next(this.cartarray)
  
  }

  removecart(job:any){
    this.cartarray.map((item:any,index:any)=>{
    if(job.id==item.id){
      this.cartarray.splice(index,1)
    }
    })
    this.cartlist.next(this.cartarray)  //remove and updation
      }
    
}
