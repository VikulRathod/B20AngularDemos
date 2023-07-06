let a1 : any = 100;
console.log(`type : ${typeof a1} value : ${a1}`);
a1 = 'Vishal';
console.log(`type : ${typeof a1} value : ${a1}`);

let a2 : unknown = 100;
console.log(`type : ${typeof a2} value : ${a2}`);
a2 = 'Mahesh';
console.log(`type : ${typeof a2} value : ${a2}`);

let a3 : string = '100';
console.log(`a3: type : ${typeof a3} value : ${a3}`);
let a4 : number = a3 as unknown as number;
console.log(`a4 using Unknown : type : ${typeof a4} value : ${a4}`);

let a5 : number = Number(a3);
console.log(`a5 using Number() : type : ${typeof a5} value : ${a5}`);

let a6 : number = parseInt(a3);
console.log(`a6 using parseInt() : type : ${typeof a6} value : ${a6}`);

let a7 : number = +a3;
console.log(`a7 using + operator : type : ${typeof a7} value : ${a7}`);
