// javascript function syntax
function printA() {
    console.log('printA() function called');
}

printA();
let r1 = printA();
console.log(`printA() result : ${r1}`);

printB(10, 10,);
printB('A', 'B');

function printB(a, b) {
    console.log(`printB() function called : ${a + b}`);
}

// typescript functions
function printC(): void {
    console.log('printC() function called');
}

printC(); // function call

function printD(a: number, b: number): void {
    console.log(`printD() called : ${a + b}`);
}

printD(10, 10);