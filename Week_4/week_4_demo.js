// TIMER DEMO

var currentSecond = 1
function printSecond() {
    console.log(currentSecond);
    currentSecond++;
}
intervalID = setInterval(printSecond, 1000);

setTimeout(clearInterval, 16000, intervalID)