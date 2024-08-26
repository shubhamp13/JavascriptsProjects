const heading = document.querySelector("#heading");
const start = document.querySelector("#one");
const stop = document.querySelector("#second");

let interval;
start.addEventListener('click', (e) => {
    if (!interval) {
        interval = setInterval(randomColor, 0);
    }


})

stop.addEventListener('click', (e) => {
    clearInterval(interval);
    interval = null;
})


const randomColor = function () {
    document.body.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

const randomNumber = function () {
    let num = parseInt((Math.random() * 255) + 1);
    return num;
}