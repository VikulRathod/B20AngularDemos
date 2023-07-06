function sample(_a) {
    var p1 = _a.p1, p2 = _a.p2, p3 = _a.p3;
    console.log("Number : ".concat(p1, " First String : ").concat(p2, " Second String : ").concat(p3));
}
var a1 = { p1: 10, p2: 'A', p3: 'B' };
sample(a1);
var a2 = { p2: 'A', p1: 10, p3: 'B' };
sample(a2);
