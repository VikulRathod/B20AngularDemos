export default class Bank{
    Name : string;
    constructor(name:string){
        this.Name = name;
    }
    show(){
        console.log(`Welcome to ${this.Name} bank.`);
    }
}

export class Account{
    constructor(public AccountType: string){
        AccountType = AccountType;
    }
}