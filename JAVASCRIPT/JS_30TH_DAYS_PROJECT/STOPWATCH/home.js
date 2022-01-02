
var second = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSecond = document.getElementById("second");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval;

function startTime() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        second++;
        appendSecond.innerHTML = "0" + second;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (second > 9) {
        appendSecond.innerHTML = second;
    }
}
var f = 0;
buttonStart.onclick = function () {
    if (f == 0) {
        interval = setInterval(startTime);
        f++;
    }
};
buttonStop.onclick = function () {
    if (f == 1)
    {
        clearInterval(interval);
        f = 0;
    }
};
buttonReset.onclick = function () {
    if(f == 0)
    {
        second = 0;
        tens = 0;
        appendSecond.innerHTML = "0" + second;
        appendTens.innerHTML = "0" + tens;
        f ++;
    }
};
