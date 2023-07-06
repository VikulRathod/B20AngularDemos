let num1 : any = "abc";
console.log(`type name : ${typeof num1} : ${num1}`);
let num2 : number = num1; // copying type and value both to num2 variable
console.log(`type name : ${typeof num2} : ${num2}`);

type MyNumberType = number;

let num3 : MyNumberType = 100;
console.log(`type name : ${typeof num3} : ${num3}`);

// any type
let a1 : any = "100";
console.log(a1.toUpperCase());

// unknown type
let a2 : unknown = "AbC";
if(typeof a2 == 'string'){
    console.log(a2.toUpperCase());
}

let a3  : unknown = 100;

// object type
// var emp = {id:1, name:'Vishal', gender: 'Male'};
let emp : object = {id : 1, name : 'Vishal', gender : 'Male'};
console.log(emp);
// console.log(emp.name); // wont work

let emp1 : {id:number, name:string, gender:string} = 
{id : 1, name : 'Vishal', gender : 'Male'};
console.log(emp1.name);
console.log(`Id : ${emp1.id} Name : ${emp1.name} Gender : ${emp1.gender}`);

