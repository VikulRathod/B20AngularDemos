// class Student {
//     RollNumber: number;
//     Name: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     printDetails() {
//         console.log(`Roll Number : ${this.RollNumber} Name : ${this.Name}`);
//     }
// }
// let s1 : Student = new Student();
// s1.RollNumber = 101;
// s1.Name = 'Vishal';
// s1.printDetails();
// class Student {
//     RollNumber: number;
//     Name: string;
//     constructor(rn: number, name: string) {
//         this.RollNumber = rn;
//         this.Name = name;
//     }
//     printDetails() {
//         console.log(`Roll Number : ${this.RollNumber} Name : ${this.Name}`);
//     }
// }
// let s1: Student = new Student(102, 'Mahesh');
// s1.printDetails();
// class Student {
//     constructor(public RollNumber: number, public Name: string) {
//         this.RollNumber = RollNumber;
//         this.Name = Name;
//     }
//     printDetails() {
//         console.log(`Roll Number : ${this.RollNumber} Name : ${this.Name}`);
//     }
// }
// let s1: Student = new Student(103, 'Akash');
// s1.printDetails();
// class Student {
//     RollNumber: number; // public
//     Name: string; // public
//     public City: string; // public
//     private Mobile: number; // private
//     protected Batch: string; // protected
// }
// let s1: Student = new Student();
// class DotNetStudents extends Student{
//     printDetails(){
//         let s1 : Student = new Student();
//         console.log(`Roll Number : ${this.RollNumber} Name : ${this.Name} 
//         City : ${this.City} Mobile : ${this.Mobile} Batch : ${this.Batch}`);
//     }
// }
var Employee = /** @class */ (function () {
    function Employee(Id, Name, Email) {
        this.Id = Id;
        this.Name = Name;
        this.Email = Email;
        this.Id = Id;
        this.Name = Name;
        this.Email = Email;
    }
    return Employee;
}());
var PermanentEmployee = /** @class */ (function (_super) {
    __extends(PermanentEmployee, _super);
    function PermanentEmployee(id, name, email, salary) {
        var _this = _super.call(this, id, name, email) || this;
        _this.YearlySalary = salary;
        return _this;
    }
    PermanentEmployee.prototype.show = function () {
        console.log("Id : ".concat(this.Id, " Name : ").concat(this.Name, " Email : ").concat(this.Email, "\n         Salary : ").concat(this.YearlySalary));
    };
    return PermanentEmployee;
}(Employee));
var shyam = new PermanentEmployee(1, 'Shyam', 'shaym@gmail.com', 500000);
shyam.show();
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(id, name, email, salary) {
        var _this = _super.call(this, id, name, email) || this;
        _this.HourlySalary = salary;
        return _this;
    }
    PartTimeEmployee.prototype.show = function () {
        console.log("Id : ".concat(this.Id, " Name : ").concat(this.Name, " Email : ").concat(this.Email, "\n         Salary : ").concat(this.HourlySalary));
    };
    return PartTimeEmployee;
}(Employee));
var akash = new PartTimeEmployee(102, 'Akash', 'akash@gmail.com', 500);
akash.show();
