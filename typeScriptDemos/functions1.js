function printA(a, b, c) {
    console.log("Addition: ".concat(a + b + c));
}
printA(10, 1, 10);
// printA(10, 10);
function printB(a, b, c) {
    if (typeof c == 'undefined') {
        console.log("Addition: ".concat(a + b));
    }
    else {
        console.log("Addition: ".concat(a + b + c));
    }
}
printB(10, 10, 20); // 40
printB(10, 10); // 20
function printC(a, b, c) {
    if (c === void 0) { c = 5; }
    console.log("Addition: ".concat(a + b + c));
}
printC(20, 20, 20); // 60
printC(20, 20); // 45
function printD(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var i = numbers_1[_i];
        sum += i;
    }
    console.log("Array Sum : ".concat(sum));
}
printD([10, 20, 30]); // Array Sum : 60
var nums = [20, 20, 20, 20];
printD(nums); // Array Sum : 80
function printE() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_2 = numbers; _a < numbers_2.length; _a++) {
        var i = numbers_2[_a];
        sum += i;
    }
    console.log("Array Sum : ".concat(sum));
}
printE(10, 10, 10, 10); // Array Sum : 40
printE();
function printF(a, b, c) {
    if (a === void 0) { a = 5; }
    if (typeof c == 'undefined') {
        console.log("Addition: ".concat(a + b));
    }
    else {
        console.log("Addition: ".concat(a + b + c));
    }
}
printF(10, 10, 10);
printF(10, 10);
// function add(a: number | string, b: number | string): void
// function add(a: number | string, b: number | string): void {
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log("Addition : ".concat(a, " + ").concat(b, " = ").concat(a + b));
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        console.log("Output string is : ".concat(a, " ").concat(b));
    }
}
add(10, 10);
add('A', 'B');
function outer(a) {
    function inner(b) {
        return a + b;
    }
    return inner;
}
var result = outer(10)(20);
console.log(result);
function addA(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // number
    }
    if (typeof a === 'string' && typeof a === 'string') {
        return a + ' ' + b; // string
    }
    return a + b;
}
function fun1() {
    var a = 10;
    var b = 0;
    var result;
    if (b == 0) {
        result = "Denominator cannot be zero";
    }
    else {
        result = 0;
    }
    if (a > 0) {
        result = 1;
    }
    return result;
}
var r1 = fun1();
console.log(r1);
var r2 = fun1();
console.log(r2);
