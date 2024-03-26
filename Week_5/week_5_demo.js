function Student(firstName, lastName, university, major, graduationYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.university = university;
    this.major = major;
    this.graduationYear = graduationYear;
    this.hasGraduated = graduationYear <= 2023;
}

var brayden = new Student("Brayden", "Miller", "UT Austin", "Computer Science", 2023);
var derek = new Student("Derek", "Wu", "UT Austin", "MIS", 2022);
var john = new Student("John", "Doe", "UT Austin", "Biology", 2020);

console.log(john.major)