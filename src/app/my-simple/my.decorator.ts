
export function MyDecorator(message:any){
    return function(target:Function){
      target.prototype.sayHello=message;
    }
  }