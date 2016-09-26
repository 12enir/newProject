import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponents {
  title:String = "User";

  user:User

  constructor() {
    this.user = new User();
    this.user.name = "Jason";
    this.user.age = 29;
    this.user.height = 170;
    this.user.weight = 70;
  }

  onCheckAge() {
    if (this.user.isOld()) {
      alert("Too old")
    } else {
      alert("Okay")
    }
  }

  onCheckBMI() {
    alert(this.user.getUserBMI())
  }


}
