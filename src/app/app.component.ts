import { CheckinService } from "./service/checkin.service";
import { Com1Component } from "./component/_com1/_com1.component";
import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  isShowWorkShop: Boolean = true;

}

