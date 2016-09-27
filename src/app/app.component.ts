import { Component } from '@angular/core';
import { User } from './user'

const USERS = [
  new User("Jason", 10, 100, 100, "pass01"),
  new User("TestPerson2", 20, 200, 200, "pass02"),
  new User("TestPerson3", 30, 300, 300, "pass03"),
  new User("TestPerson4", 40, 400, 400, "pass04")
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponents {
  title:String = "User";
  selectedUser:User;
  users:Array<User>

  constructor() {
    this.selectedUser = USERS[0];
    this.users = USERS;
  }

  onCheckAge() {
    if (this.selectedUser.isOld()) {
      alert("Too old")
    } else {
      alert("Okay")
    }
  }

  onCheckBMI() {
    alert(this.selectedUser.getUserBMI())
  }

  deleteUser(user:User) {
    let userIndex:number = this.users.indexOf(user);
    this.users.splice(userIndex, 1);
  }

  deleteUserByIndex(userIndex:number) {
    this.users.splice(userIndex, 1);
  }

  addUser() {
    let tempUser:any = {};
    tempUser.name = prompt("Name");
    tempUser.age = prompt("Age");
    tempUser.password = prompt("Password");

    this.users.push(new User(tempUser.name, tempUser.age, tempUser.age, tempUser.age, tempUser.password));
  
    //we might need to copy our users array just because our filter may now detect any changes (detect ref of array change only)
    
}
  
}
