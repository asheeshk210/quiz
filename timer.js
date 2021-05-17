let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let timex = 0;
let seconds = Math.floor((time % (100 * 60)) / 1000);
let minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

setInterval(function () {
    if (seconds < 59) {
        seconds++;
    }
    else {
        minute++;
        seconds = 0;
    }

    let format_sec = seconds<10 ? `0${seconds}` : `${seconds}`;
    let format_min = minute<10 ? `0${minute}` : `${minute}`;
    document.querySelector(".watch").innerHTML = `${format_min} : ${format_sec}`;
    sessionStorage.setItem("totaltime", `${format_min} : ${format_sec}`);
}, 1000);
