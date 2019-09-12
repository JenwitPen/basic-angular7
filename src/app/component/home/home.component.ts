import { IForm } from './../../interfaces/form.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShowWorkShop: Boolean = false;
  formData: IForm;
  constructor(private router:Router) {

   }

  ngOnInit() {
  }
onRedirect(){
  this.router.navigate(["/","data",1200],{
    queryParams:{
      param1:12000,
      param2:14000
    }
  })
}
}
