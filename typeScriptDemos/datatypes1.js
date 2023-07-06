var numbers = [10, 20, 30];
console.log("type name : ".concat(typeof numbers, " length : ").concat(numbers.length));
numbers[3] = 40;
// numbers[4] = "V#"; // wont assign string value
console.log(numbers);
var numbers1 = new Array(10, 20, 30);
console.log("type name : ".concat(typeof numbers1, " length : ").concat(numbers1.length));
console.log(numbers1);
var numbers2 = [10, "ABC", true];
var numbers3 = [10, 20, "Vishal"];
console.log(numbers3); //  [10,20,"Vishal"]
numbers3.push(40);
console.log(numbers3); //  [10,20,"Vishal",40]
numbers3.unshift("Hello");
console.log(numbers3); //  ["Hello",10,20,"Vishal", 40]
var student = [101, 'Vishal', 'Pune'];
console.log(student[0]); // 101 
console.log(student[1]); // Vishal
console.log(student[2]); // Pune
// student = ['Mumbai', 'Mahesh', 102]; // type should match
var students = [
    [101, 'Vishal', 'Pune'],
    [102, 'Mahesh', 'Mumbai'],
    [103, 'Dipak', 'Pune']
];
for (var i = 0; i < students.length; i++) {
    console.log("Roll Number : ".concat(students[i][0], " Name : ").concat(students[i][1], " City : ").concat(students[i][2]));
}
var click;
click = 'click';
console.log(click);
// click = 'focus';
// console.log(click);
var mouseEvents;
mouseEvents = 'click';
console.log(mouseEvents);
mouseEvents = 'dblClick';
console.log(mouseEvents);
// mouseEvents = 'onKeyUp';
// console.log(mouseEvents);
// let n1 : number = 10;
// let n2 = 10;
var n1 = 10;
console.log(typeof n1);
var n2;
// console.log(typeof n2);
