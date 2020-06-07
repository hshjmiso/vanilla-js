const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${convertTime(hours)}:${convertTime(minutes)}:${convertTime(seconds)}`;
}

function convertTime(time) {
    return time < 10 ? `0${time}` : time;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();