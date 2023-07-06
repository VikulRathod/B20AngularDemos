let numbers : number[] = [10,20,30];
console.log(`type name : ${typeof numbers} length : ${numbers.length}`);

numbers[3]= 40;
// numbers[4] = "V#"; // wont assign string value
console.log(numbers);

let numbers1 : Array<number> = new Array<number>(10,20,30);
console.log(`type name : ${typeof numbers1} length : ${numbers1.length}`);
console.log(numbers1);

let numbers2 : any[] = [10, "ABC", true];

let numbers3 : (number | string) [] = [10,20,"Vishal"];
console.log(numbers3); //  [10,20,"Vishal"]
numbers3.push(40);
console.log(numbers3); //  [10,20,"Vishal",40]
numbers3.unshift("Hello");
console.log(numbers3); //  ["Hello",10,20,"Vishal", 40]

let student : [number, string, string] = [101, 'Vishal', 'Pune'];
console.log(student[0]); // 101 
console.log(student[1]); // Vishal
console.log(student[2]); // Pune

// student = ['Mumbai', 'Mahesh', 102]; // type should match

let students : Array<[number, string, string]> = 
[
    [101, 'Vishal', 'Pune'],
    [102, 'Mahesh', 'Mumbai'],
    [103, 'Dipak', 'Pune']
];

for(let i = 0; i < students.length;i++){
console.log(`Roll Number : ${students[i][0]} Name : ${students[i][1]} City : ${students[i][2]}`);    
}

let click : 'click';
click = 'click';
console.log(click);
// click = 'focus';
// console.log(click);

let mouseEvents : 'click' | 'dblClick' | 'mouseOver';

mouseEvents = 'click';
console.log(mouseEvents);

mouseEvents = 'dblClick';
console.log(mouseEvents);

// mouseEvents = 'onKeyUp';
// console.log(mouseEvents);

// let n1 : number = 10;
// let n2 = 10;

let n1;
console.log(typeof n1);
let n2 : number;
// console.log(typeof n2);

