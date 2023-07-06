"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bank_1 = require("./bank");
var b = new bank_1.default('ICICI');
b.show();
var b1 = new bank_1.default('AXIS');
b1.show();
var a = new bank_1.Account("Savings");
// generic 
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.print = function (a) {
        console.log("You Entered : ".concat(a));
        var result = a;
        return result;
    };
    return Calculator;
}());
var c1 = new Calculator();
console.log(c1.print(10));
var c2 = new Calculator();
console.log(c2.print('VHaaSh'));
