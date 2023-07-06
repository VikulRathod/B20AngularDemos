// while loop
// let start: number = 1;
// while (start <= 5) {
//     console.log(start);
//     start++;
// }

// do while

// let start: number = 1
// do {
//     console.log(start)
//     // start++
//     start = start + 1
// } while (start <= 0)

// for loop

// let result : string = '';
// let result : number[] = [];
// for (let i = 1; i <= 5; i++) {
//     if(i == 1 || i % 2 == 0)
//         continue;
//         //break;
//     //result += `${i} `;
//     result.push(i);
// }
// console.log(result);


let numbers: number[] = [10, 20, 30, 40, 50];
// for in loop
for(let i in numbers){
    console.log(`index : ${i} item : ${numbers[i]}`); // returns index number
}

// for of loop
for(let i of numbers){
    console.log(i); // prints items of an array
}