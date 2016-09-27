export class User {
    name : string;
    age : number;
    weight : number;
    height : number;
    password:string;

    constructor(name:string, age:number, weight:number, height:number, password:string) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.password = password;
    }

    isOld():boolean {
       return this.age >= 30;
    }

    getUserBMI():number {
        return this.weight / (this.height * this.height);
    }

    printUserBMI() {
        alert("BMI is : " + this.getUserBMI())
    }

    isHealthy():boolean {
        return this.getUserBMI() > 0.0001 && this.getUserBMI() < 1;
    }
}