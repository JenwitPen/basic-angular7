import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive {

  constructor() { 
    console.log("appDirective1");
  }
@HostBinding("style.color") color:string;
@HostListener("mouseover")
simplemouseover(){
  this.color="red"
}
@HostListener("mouseout")
simplemouseout(){
  this.color="black"
}
}
