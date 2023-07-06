// function declaration/ named function/ normal function
printA('Mahesh'); // function hoisting
function printA(s) {
    console.log("printA() called : Hello, ".concat(s));
}
printA('Vishal');
// anonymous function/ function as expression
// let r3 = printB('Atul', 'Rathod'); // not work before function declaration
var printB = function (s1, s2) {
    return "Full Name : ".concat(s1, " ").concat(s2);
};
var r2 = printB('Ajay', 'Ade');
console.log(r2);
// arrow function
var printD = function (a, b) {
    var result = a + b;
    return result;
};
var r3 = printD(100, 15);
console.log("printD() result : ".concat(r3));
var printE;
printE = function () { return 'Welcome, Good Morning'; };
var r4 = printE();
console.log("printE() result ".concat(r4));
