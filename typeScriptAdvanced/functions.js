function sample(a, b) {
    console.log("a : ".concat(a, " b : ").concat(b));
}
sample(10, 'Vishal');
// sample('Mahesh', 20); // error
// question:
// a function having three parameters one number type and two parameters of string type
function sample1(a, b, c) {
    console.log("a(number) : ".concat(a, " b(string) : ").concat(b, " c(string) : ").concat(c));
}
sample1(10, 'A', 'B');
// sample1('A', 10, 'B'); // error
// sequence of arguments should not matter while calling function
var a1 = { a: 10, b: 'Mahesh', c: 'Pune' };
console.log(a1);
// console.log(a1.a);
var a2 = { a: 10, b: 'Mahesh', c: 'Pune' };
console.log(a2.a);
function sample2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log("sampl2 output: a(number) : ".concat(a, " b(string) : ").concat(b, " c(string) : ").concat(c));
}
// sample2(10,'A','B'); // error
var a3 = { a: 101, b: 'Vishal', c: 'Pune' };
sample2(a3);
sample2({ b: 'Mahesh', a: 102, c: 'Mumbai' });
