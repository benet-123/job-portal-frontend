import { ApiService } from './../jobfeed/api.service';
import { Component, OnInit } from '@angular/core';
import { AppliedService } from '../appliedjob/applied.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: [ './wishlist.component.css']
})
export class WishlistComponent implements OnInit {
wishlist:any
emsg:any
  constructor(private api:ApiService,private applied:AppliedService,private router:Router) { }

  ngOnInit(): void {
  
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist=data.jobs
        if(this.wishlist.length==0){
          this.emsg="Empty"
        }
        
      },

      (data:any)=>{
        this.emsg=data.error.message
        
      }

    )


  }


  // backtoapplied(jobs:any){
  //   this.api.backtoapplied(jobs).subscribe(
  //     (result:any)=>{
  //       alert(result.message)    //addedd successfully
  //     },
  //     (result:any)=>{
  //       alert(result.error.message)   //error message
  //     }
  //   )

    
  //   }

  deletewish(job:any){
    this.api.deletefromwish(job.id).subscribe(
      (result:any)=>{
        alert(result.message)
        // this.router.navigateByUrl('wishlist')
        this.wishlist=result.wishlist
       if(this.wishlist.length==0){
  this.emsg='Empty wishlist'
       }
        // window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
  
    addcart(job:any){
      this.applied.addcart(job)
      this.deletewish(job)
    }
  

addwishlist(job:any){
this.applied.addcart(job)
}

    
  
  }
  




