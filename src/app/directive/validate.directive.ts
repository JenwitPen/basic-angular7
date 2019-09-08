import { OnChanges } from '@angular/core';
import { Directive, HostBinding, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective implements OnChanges{
  @Input('appValidate') control:AbstractControl;
  @HostBinding('class') class:string='invalid-feedback';
  @HostBinding('innerText') innerText:string="";
  constructor() { 

  }
  ngOnChanges() {
    if(!this.control){

      return;
    }
    this.innerText=this.getErrorMessage();
    this.control.valueChanges.subscribe(()=>this.innerText=this.getErrorMessage());
  }

  errorMessage = {
    required: "กรุณากรอกข้อมูล"
  };
  getErrorMessage() {
   const control=this.control;
    if (control && control.invalid) {
      const errors = Object.keys(control.errors);
      const errorMessage = this.errorMessage[errors[0]];
      return errorMessage;
    }
  }
}
