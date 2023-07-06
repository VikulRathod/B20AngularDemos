function printA(a: number, b: number, c: number): void {
    console.log(`Addition: ${a + b + c}`)
}

printA(10, 1, 10);

// printA(10, 10);
function printB(a: number, b: number, c?: number): void {
    if (typeof c == 'undefined') {
        console.log(`Addition: ${a + b}`)
    } else {
        console.log(`Addition: ${a + b + c}`)
    }
}

printB(10, 10, 20); // 40
printB(10, 10); // 20

function printC(a: number, b: number, c: number = 5): void {
    console.log(`Addition: ${a + b + c}`)
}

printC(20, 20, 20); // 60
printC(20, 20); // 45

function printD(numbers: number[]): void {
    let sum: number = 0;
    for (let i of numbers) {
        sum += i;
    }
    console.log(`Array Sum : ${sum}`)
}

printD([10, 20, 30]); // Array Sum : 60

let nums: number[] = [20, 20, 20, 20];
printD(nums); // Array Sum : 80

function printE(...numbers: number[]): void {
    let sum: number = 0;
    for (let i of numbers) {
        sum += i;
    }
    console.log(`Array Sum : ${sum}`)
}


printE(10, 10, 10, 10); // Array Sum : 40
printE();

function printF(a: number = 5, b: number, c?: number): void {
    if (typeof c == 'undefined') {
        console.log(`Addition: ${a + b}`)
    } else {
        console.log(`Addition: ${a + b + c}`)
    }
}

printF(10, 10, 10);
printF(10, 10);

// function overloading

// function add(a: number, b: number): void {
//     console.log(a + b);
// }

// add(10, 10); // 20

// function add(a: string, b: string): void {
//     console.log(a + b);
// }

// function add(a: any, b: any): void {
//     console.log(a + b);
// }

// add(10, 10);
// add('A', 'B');

function add(a: number, b: number): void
function add(a: string, b: string): void

// function add(a: number | string, b: number | string): void

// function add(a: number | string, b: number | string): void {
function add(a: any, b: any): void {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(`Addition : ${a} + ${b} = ${a + b}`);
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        console.log(`Output string is : ${a} ${b}`);
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

let result = outer(10)(20);
console.log(result);

function addA(a: any, b: any): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // number
    }
    if (typeof a === 'string' && typeof a === 'string') {
        return a + ' ' + b; // string
    }

    return a + b;
}

// function addC(a: number | string, b: number | string, c: number | string) {

// }

// addC(10, 10, 'A');
// addC(10, 'B', 'A');
// addC('B', 10, 'A');

function fun1(): number
function fun1(): string

function fun1(): any {
    let a = 10;
    let b = 0;
    let result;
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

let r1 = fun1();
console.log(r1);

let r2 = fun1();
console.log(r2);

fun1()