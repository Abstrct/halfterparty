const countDownDate = new Date("May 11, 2020 17:00:00").getTime();


const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

    days = days.length === 2 ? days : `0${days}`
    hours = hours.length === 2 ? hours : `0${hours}`
    minutes = minutes.length === 2 ? minutes : `0${minutes}`
    seconds = seconds.length === 2 ? seconds : `0${seconds}`

    const timer = document.querySelector('.timer');
    timer.innerHTML = `${days}:${hours}:${minutes}:${seconds}`

    if (distance < 0) {
        clearInterval(x);
        timer.innerHTML = "PARTY TIME"
    }
}, 1000);