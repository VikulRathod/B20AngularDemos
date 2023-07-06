// class Student {
//     RollNumber: number;
//     Name: string;

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

class Employee {
    constructor(protected Id: number, public Name: string, public Email: string) {
        this.Id = Id;
        this.Name = Name;
        this.Email = Email;
    }
}

class PermanentEmployee extends Employee {
    public YearlySalary: number;
    constructor(id: number, name: string, email: string, salary: number) {
        super(id, name, email);
        this.YearlySalary = salary;
    }
    show() {
        console.log(`Id : ${this.Id} Name : ${this.Name} Email : ${this.Email}
         Salary : ${this.YearlySalary}`);
    }
}

let shyam = new PermanentEmployee(1, 'Shyam', 'shaym@gmail.com', 500000);
shyam.show();

class PartTimeEmployee extends Employee {
    public HourlySalary: number;
    constructor(id: number, name: string, email: string, salary: number) {
        super(id, name, email);
        this.HourlySalary = salary;
    }
   show(){
        console.log(`Id : ${this.Id} Name : ${this.Name} Email : ${this.Email}
         Salary : ${this.HourlySalary}`);
    }
}

let akash = new PartTimeEmployee(102,'Akash','akash@gmail.com',500);
akash.show();