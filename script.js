const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
function countdown() {
    const currentDate = new Date();
    const year = currentDate.getFullYear()
    const newYearsDate = new Date(year, 12, 1);

    const timeRemaining = (newYearsDate - currentDate)

    const secondsRemaining = timeRemaining / 1000;
    const days = Math.floor((secondsRemaining / 3600) / 24)
    const hours = Math.floor((secondsRemaining / 3600) % 24)
    const minutes = Math.floor((secondsRemaining / 60) % 60)
    const seconds = Math.floor(secondsRemaining % 60)

    // console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`): time;
}

// Initial call
countdown();

setInterval(countdown, 1000)
