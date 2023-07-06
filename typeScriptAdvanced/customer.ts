import Bank, { Account } from './bank'

let b: Bank = new Bank('ICICI');
b.show();

let b1: Bank = new Bank('AXIS');
b1.show();

let a: Account = new Account("Savings");


// generic 
class Calculator<Tin, Tout>{
    Id: Tin;
    print(a: Tin): Tout {
        console.log(`You Entered : ${a}`);
        let result: any = a;
        return result;
    }
}

let c1 = new Calculator<number, string>();
console.log(c1.print(10));

let c2: Calculator<string, string> = new Calculator<string, string>();
console.log(c2.print('VHaaSh'));

function sample(a: number, b: number) {
    b = a * 10;
}