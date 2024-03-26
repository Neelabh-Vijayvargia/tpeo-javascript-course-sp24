
// Problem One of Homework
function powersOfThree() {
    for (var num = 1; num <= 19683; num *= 3) {
        console.log(num);
        if (num == 27) {
            console.log("This is my favorite power of three!");
        }
    }
}

    // Timing it Out
setTimeout(powersOfThree, 3000);


//  Question Two of Homework

function everyTenSeconds() {
    var intervalId = setInterval(console.log, 10000, "Hello World!");
    setTimeout(clearInterval, 130000, intervalId);
}
everyTenSeconds();
