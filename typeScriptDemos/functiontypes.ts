// function declaration/ named function/ normal function

printA('Mahesh'); // function hoisting

function printA(s: string): void {
    console.log(`printA() called : Hello, ${s}`);
}

printA('Vishal');

// anonymous function/ function as expression

// let r3 = printB('Atul', 'Rathod'); // not work before function declaration

let printB = function (s1: string, s2: string): string {
    return `Full Name : ${s1} ${s2}`;
}

let r2: string = printB('Ajay', 'Ade');
console.log(r2);

// arrow function

let printD = (a: number, b: number): number => {
    let result: number = a + b;
    return result;
};

let r3: number = printD(100, 15);
console.log(`printD() result : ${r3}`);

let printE: () => string

printE = () => 'Welcome, Good Morning'

let r4: string = printE();
console.log(`printE() result ${r4}`);

