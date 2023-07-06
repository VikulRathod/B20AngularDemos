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
var numbers = [10, 20, 30, 40, 50];
// for in loop
for (var i in numbers) {
    console.log("index : ".concat(i, " item : ").concat(numbers[i])); // returns index number
}
// for of loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var i = numbers_1[_i];
    console.log(i); // prints items of an array
}
