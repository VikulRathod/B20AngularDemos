"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Bank = /** @class */ (function () {
    function Bank(name) {
        this.Name = name;
    }
    Bank.prototype.show = function () {
        console.log("Welcome to ".concat(this.Name, " bank."));
    };
    return Bank;
}());
exports.default = Bank;
var Account = /** @class */ (function () {
    function Account(AccountType) {
        this.AccountType = AccountType;
        AccountType = AccountType;
    }
    return Account;
}());
exports.Account = Account;
