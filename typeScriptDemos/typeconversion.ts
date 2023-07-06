let s1 : string = "100";
console.log(`s1 => type name : ${typeof s1} value : ${s1}`);

let i1 : number = s1 as unknown as number;
console.log(`i1 => type name : ${typeof i1} value : ${i1}`);

let i2 : number = parseInt(s1);
console.log(`i2 => type name : ${typeof i2} value : ${i2}`);

let i3 : number = Number(s1);
console.log(`i3 => type name : ${typeof i3} value : ${i3}`);

let i4 : number = +(s1);
console.log(`i4 => type name : ${typeof i4} value : ${i4}`);

s1 = '';
let b1 : boolean = Boolean(s1);
console.log(`b1 => type name : ${typeof b1} value : ${b1}`);