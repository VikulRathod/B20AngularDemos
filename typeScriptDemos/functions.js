// javascript function syntax
function printA() {
    console.log('printA() function called');
}
printA();
var r1 = printA();
console.log("printA() result : ".concat(r1));
printB(10, 10);
printB('A', 'B');
function printB(a, b) {
    console.log("printB() function called : ".concat(a + b));
}
// typescript functions
function printC() {
    console.log('printC() function called');
}
printC(); // function call
function printD(a, b) {
    console.log("printD() called : ".concat(a + b));
}
printD(10, 10);
