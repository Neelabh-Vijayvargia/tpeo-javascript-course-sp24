
// Question 1
function countUpwardsByThree() {
    for (var i = 0; i <= 30; i += 3) {
        console.log(i);
    }
}

countUpwardsByThree()

//Question 2

function guessMyFavoriteNumber(guess) {
    var favNumber = 4
    if (guess == favNumber) {
        console.log("You guessed my favorite number!");
    } else {
        console.log("Try Again!");
    }
}

guessMyFavoriteNumber(5);
guessMyFavoriteNumber(4);
guessMyFavoriteNumber(11);

//Question 3

function convertNumberToDay(day) {
    switch(day) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("This number is not a day >:(");
            break;
    }
}

for (var i = 0; i < 7; i++) {
    convertNumberToDay(i);
}

