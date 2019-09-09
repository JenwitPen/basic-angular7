import { IForm } from './../../interfaces/form.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShowWorkShop: Boolean = false;
  formData: IForm;
  constructor() { }

  ngOnInit() {
  }

}
