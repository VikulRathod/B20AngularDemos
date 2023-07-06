var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.show = function () {
        return "Hello From Employee Class";
    };
    return Employee;
}());
var e1 = new Employee();
console.log(e1.show());
var e2 = new Employee();
console.log(e2.show());
