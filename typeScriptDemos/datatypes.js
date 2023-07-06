var num1 = "abc";
console.log("type name : ".concat(typeof num1, " : ").concat(num1));
var num2 = num1; // copying type and value both to num2 variable
console.log("type name : ".concat(typeof num2, " : ").concat(num2));
var num3 = 100;
console.log("type name : ".concat(typeof num3, " : ").concat(num3));
// any type
var a1 = "100";
console.log(a1.toUpperCase());
// unknown type
var a2 = "AbC";
if (typeof a2 == 'string') {
    console.log(a2.toUpperCase());
}
var a3 = 100;
// object type
// var emp = {id:1, name:'Vishal', gender: 'Male'};
var emp = { id: 1, name: 'Vishal', gender: 'Male' };
console.log(emp);
// console.log(emp.name); // wont work
var emp1 = { id: 1, name: 'Vishal', gender: 'Male' };
console.log(emp1.name);
console.log("Id : ".concat(emp1.id, " Name : ").concat(emp1.name, " Gender : ").concat(emp1.gender));
