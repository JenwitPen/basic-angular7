import { MyDecorator } from './my.decorator';

@MyDecorator("Heloow world")
export class MyClass {
  constructor() {
    this.arrays.push(5);
    this.arrays.push(1);
  }
  arrays: number[] = [200, 100, 50, 10];
  objects: object = { firstname: "Jenwit", lastname: "Penjamrat" };

  onFunction(param: string): string {
    return "onFunction :" + param;
  }
  get onGetFunction(): string {
    const sum = 2 + 2;
    return "onGetFunction :" + sum;
  } 
}
