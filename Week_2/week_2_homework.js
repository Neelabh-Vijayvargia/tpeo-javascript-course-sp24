// Neelabh Vijayvargia

function sumOfSquareAreas(a,b) {
    return a*a + b*b;
}

console.log(sumOfSquareAreas(3,9));
console.log(sumOfSquareAreas(8,8));
console.log(sumOfSquareAreas(4,2));



function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    var grade = homeworkAvg * 0.1 + quizAvg * 0.15 + examAvg * 0.75;
    return grade;
}

console.log(gradeCalculator(0.95,0.95,0.95));
console.log(gradeCalculator(0.85,0.95,0.70));
console.log(gradeCalculator(1.00,0.85,0.45));