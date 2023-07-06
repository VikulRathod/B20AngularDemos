function sample(a: number, b: string): void {
    console.log(`a : ${a} b : ${b}`);
}

sample(10, 'Vishal');
// sample('Mahesh', 20); // error

// question:
// a function having three parameters one number type and two parameters of string type

function sample1(a: number, b: string, c: string): void {
    console.log(`a(number) : ${a} b(string) : ${b} c(string) : ${c}`);
}

sample1(10, 'A', 'B');
// sample1('A', 10, 'B'); // error

// sequence of arguments should not matter while calling function

let a1: object = { a: 10, b: 'Mahesh', c: 'Pune' };
console.log(a1);
// console.log(a1.a);

let a2: { a: number, b: string, c: string } = { a: 10, b: 'Mahesh', c: 'Pune' };
console.log(a2.a);

function sample2({ a, b, c }: { a: number, b: string, c: string }): void {
    console.log(`sampl2 output: a(number) : ${a} b(string) : ${b} c(string) : ${c}`);
}

// sample2(10,'A','B'); // error
let a3: { a: number, b: string, c: string } = { a: 101, b: 'Vishal', c: 'Pune' };
sample2(a3);

sample2({ b: 'Mahesh', a: 102, c: 'Mumbai' });