class Student {
    id: number;
    fname: string;
    favNumber: number;
    favColor: string;

    //constructor
    constructor(id: number, fname: string, favNumber: number, favColor: string) {
        this.id = id;
        this.fname = fname;
        this.favNumber = favNumber;
        this.favColor = favColor;
    }

    //methods
    print(): void {
        console.log(`${this.id}|${this.fname}|${this.favNumber}|${this.favColor}`);
    }
}

//array of students, create instance in the array itself
let students: Student[] = [
    //ron, chris, julie, emilie, sean
    new Student(1, "Ron", 7, "Pea Green"),
    new Student(2, "Chris", 43, "Red"),
    new Student(3, "Julie", 15, "Pink"),
    new Student(4, "Emilie", 7, "Purple"),
    new Student(5, "Sean", 9, "Blue")
];

for(let student of students) {
    student.print();
}

//call the print method on each of the instances of Student above
//ron.print();
//chris.print();
//julie.print();
//emilie.print();