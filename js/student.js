"use strict";
var Student = /** @class */ (function () {
    //constructor
    function Student(id, fname, favNumber, favColor) {
        this.id = id;
        this.fname = fname;
        this.favNumber = favNumber;
        this.favColor = favColor;
    }
    //methods
    Student.prototype.print = function () {
        console.log(this.id + "|" + this.fname + "|" + this.favNumber + "|" + this.favColor);
    };
    return Student;
}());
//array of students, create instance in the array itself
var students = [
    //ron, chris, julie, emilie, sean
    new Student(1, "Ron", 7, "Pea Green"),
    new Student(2, "Chris", 43, "Red"),
    new Student(3, "Julie", 15, "Pink"),
    new Student(4, "Emilie", 7, "Purple"),
    new Student(5, "Sean", 9, "Blue")
];
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    student.print();
}
//call the print method on each of the instances of Student above
//ron.print();
//chris.print();
//julie.print();
//emilie.print();
