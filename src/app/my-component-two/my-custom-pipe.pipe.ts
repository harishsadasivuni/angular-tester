import { Pipe, PipeTransform, numberAttribute } from '@angular/core';

@Pipe({
  name: 'mycustompipe'
})
export class MyCustomPipePipe implements PipeTransform {

  transform(value: number, args: number): any {
    var price = args;
    return value*price;
  }

}
