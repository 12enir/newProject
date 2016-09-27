import { Pipe, PipeTransform } from '@angular/core';
import {User} from './user'

@Pipe({
  name: 'sumPipe'
})
export class SumPipePipe implements PipeTransform {

  transform(users: Array<User>, args?: any): any {
    let ageSum:number = 0;
    users.forEach(user => {
      ageSum += user.age;
    });

    return ageSum;
  }

}
