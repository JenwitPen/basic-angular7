import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-com2",
  templateUrl: "./_com2.component.html",
  styleUrls: ["./_com2.component.css"]
})
export class Com2Component {
  form: FormGroup;
  @Output('onSubmitChange') onSubmitChange=new EventEmitter();
  @Output('onClose') onClose=new EventEmitter<boolean>();
  constructor(private buider: FormBuilder) {
    this.createFormData();
  }

  private createFormData() {
    this.form = this.buider.group({
      sex: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      phones: this.buider.array([this.creatPhoneControl()])
    });
  }
  private creatPhoneControl(){
    return this.buider.control(null,
      [Validators.required,
      Validators.pattern(/^[0-9]{10}$/)]);
  }
  get getPhones() {
    const formArray = this.form.get("phones") as FormArray;
    return formArray;
  }
  onSubmit() {
    this.form.get('sex').markAsTouched();
    this.form.get('firstname').markAsTouched();
    this.form.get('lastname').markAsTouched();
    this.getPhones.controls.forEach(control => control.markAsTouched());
    if (this.form.valid) {
      this.onSubmitChange.emit(this.form.value);
    }
  }
  onAddPhone() {
    const phoneArray = this.getPhones;
    phoneArray.push(this.creatPhoneControl());
  }
  removePhone() {
    const phoneArray = this.getPhones;
    if (phoneArray.length > 1) {
      phoneArray.removeAt(phoneArray.length - 1);
    }
  }
}
