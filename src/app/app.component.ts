import { IForm } from "./interfaces/form.interface";
import { Component } from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router) { }
  onRedirec(url: string | any) {
    if (typeof url == "string") {
      this.router.navigateByUrl(url);
    } else {
      this.router.navigate(url);
    }
  }
}
