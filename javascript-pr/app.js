class student {
    constructor(id, name, age, work) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.work = work;
    };
    set studentList(name) {
        this.name = name;
    };
    get studentInfo() {
        return `Name: ${this.name}, ID: ${this.id}, Work: ${this.work}.`;
    }
};
let studentOne = new student(101, 'Sabbir', 23, 'Student & Freelanser');
console.log(studentOne);
studentOne.studentList = 'Ridoy';
console.log(studentOne);
studentOne.studentList = 'Raja';
console.log(studentOne);
studentOne.studentList = 'Sagor';
console.log(studentOne);
studentOne.studentInfo;
console.log(studentOne);