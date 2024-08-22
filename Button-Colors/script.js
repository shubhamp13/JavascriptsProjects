const buttons = document.querySelectorAll('.btn');

function randomNumber() {
    let no = parseInt(Math.random() * 255) + 1;
    return no;
}
buttons.forEach((a) => {
    a.addEventListener('click', function (e) {
        e.preventDefault();

        a.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;

    })
})



