console.log('*** start ***');
var num = 10;
// if (num == 10) {
//     console.log('TEN');
// }
// else if (num == 20) {
//     console.log('TWENTY');
// }
// else {
//     console.log('NOT 10 or 20');
// }
// let result : string = (num == 10) ? "TEN" : "NOT TEN";
// console.log(result);
switch (num) {
    // case 10:
    //     console.log('TEN');
    //     break;
    case 10:
    case 20:
        console.log('TEN or TWENTY');
        break;
    case 30:
        console.log('THIRTY');
        break;
    default:
        console.log('NOT 10 20 or 30');
        break;
}
console.error('*** end ***');
