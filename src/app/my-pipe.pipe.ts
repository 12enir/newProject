import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: string): any {
    let unit:string = "years";
    if (typeof(args) == "string" && args.length > 0) {
      unit = args;
    }
    return value + " " + unit;
  }

}
