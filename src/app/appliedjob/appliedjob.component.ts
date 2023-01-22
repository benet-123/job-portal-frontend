import { Router } from '@angular/router';
import { ApiService } from './../jobfeed/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appliedjob',
  templateUrl: './appliedjob.component.html',
  styleUrls: ['./appliedjob.component.css']
})
export class AppliedjobComponent implements OnInit {
applied:any
emsg:any

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.api.getapplied().subscribe(
      (data:any)=>{
        this.applied=data.jobs
        if(this.applied.length==0){
          this.emsg="Empty"
        }

        
      },
  
      (data:any)=>{
        this.emsg=data.error.message
        
      }

  
    )
  
  }



}
