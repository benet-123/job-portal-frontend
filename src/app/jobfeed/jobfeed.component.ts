import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-jobfeed',
  templateUrl: './jobfeed.component.html',
  styleUrls: ['./jobfeed.component.css']
})
export class JobfeedComponent implements OnInit {
alljobs:any=[];
searchterm:string=''  //details of all jobs in array
jobfeed: any;
job: any;
  constructor( private api:ApiService) { }

  ngOnInit(): void {
    this.api.getjobs().subscribe(
      (data:any)=>{
        this.alljobs=data.jobfeed
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }



  addtowishlist(jobs:any){
this.api.addtowishlist(jobs).subscribe(
  (result:any)=>{
    alert(result.message)    //addedd successfully
  },
  (result:any)=>{
    alert(result.error.message)   //error message
  }
)
}

addtoapplied(jobs:any){
  this.api.addtoapplied(jobs).subscribe(
    (result:any)=>{
      alert(result.message)    //addedd successfully
    },
    (result:any)=>{
      alert(result.error.message)   //error message
    }
  )
  }
  

}
