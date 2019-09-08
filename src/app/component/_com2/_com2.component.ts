import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-com2",
  templateUrl: "./_com2.component.html",
  styleUrls: ["./_com2.component.css"]
})
export class Com2Component {
  form: FormGroup;
  constructor(private buider: FormBuilder) {
    this.createFormData();
  }

  private createFormData() {
    this.form = this.buider.group({
      sex: [],
      firstname: [],
      lastname: [],
      phones: this.buider.array([this.buider.control("0841959183")])
    });
  }
  get getPhones() {
    const formArray = this.form.get("phones") as FormArray;
    return formArray;
  }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
  onAddPhone(){
    const phoneArray=this.getPhones;
    phoneArray.push(this.buider.control(null));
  }
  removePhone(){
    const phoneArray=this.getPhones;
    if(phoneArray.length>1){
    phoneArray.removeAt(phoneArray.length-1);
  }
  }
}
