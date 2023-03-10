import { ApiService } from './../jobfeed/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  search(event:any){
    let searchkey=event.target.value
    this.api.searchkey.next(searchkey)
  }

}
