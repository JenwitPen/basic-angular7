import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  id:string;
  params:any;
  qeury:any;
data:any;
  constructor(private activeRoute:ActivatedRoute) { 
    this.params=this.activeRoute.snapshot.params;
    this.qeury=this.activeRoute.snapshot.queryParams;
    this.data=this.activeRoute.snapshot.data;
  }

  ngOnInit() {
  }

}
