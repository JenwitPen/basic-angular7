import {
  
  TemplateRef,
  ViewContainerRef,
  Input,
  OnChanges,Directive
} from "@angular/core";

@Directive({
  selector: "[appDirective2]"
})
export class Directive2Directive implements OnChanges {
  @Input("appDirective2") Directive2: number;
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}
  ngOnChanges() {
    console.log(this.Directive2);
    if (this.Directive2 % 2 == 0) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.remove();
    }
  }
}
