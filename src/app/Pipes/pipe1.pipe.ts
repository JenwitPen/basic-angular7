import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pipe1"
})
export class Pipe1Pipe implements PipeTransform {

  transform(message: string,limit:number=50) {
    return this.onCutMessage(message,limit);
  }
  private onCutMessage(meessage: string,limit:number) {
    if (meessage.length < limit) {
      return meessage;
    } else {
      return meessage.substring(0, limit) + "...";
    }
  }
}
