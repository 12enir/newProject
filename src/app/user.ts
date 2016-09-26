export class User {
    name : string;
    age : number;
    weight : number;
    height : number;


    isOld():boolean {
       return this.age >= 100;
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