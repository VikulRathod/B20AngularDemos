interface IEmp {
    salaryCredit();
}

interface IEmployee extends IEmp {
    show(): string;
    print();
}

enum EmployeeType {
    Permanent, Temporary, Contractor
}

class Employee implements IEmployee {

    // EmpType : number; // 1 = permanenent, 2 = temporary, 3 Contractor
    EmpType: EmployeeType;
    constructor(eType: EmployeeType){
        this.EmpType = eType;
    }

    salaryCredit() {
        throw new Error("Method not implemented.");
    }
    print() {
        throw new Error("Method not implemented.");
    }
    show(): string {
        return "Hello From Employee Class";
    }
}

let e1: Employee = new Employee(EmployeeType.Permanent);
console.log(e1.show());

let e2: IEmployee = new Employee(EmployeeType.Temporary);
console.log(e2.show());

