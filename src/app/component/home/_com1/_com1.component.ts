import { IForm } from "../../../interfaces/form.interface";
import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-com1",
  templateUrl: "./_com1.component.html",
  styleUrls: ["./_com1.component.css"]
})
export class Com1Component {
  @Input("formData") formData: IForm;
  constructor() {}
}
