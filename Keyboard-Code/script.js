const keyPressed = document.body;
const columnOne = document.querySelector('#key');
const columnTwo = document.querySelector(`#key-code`);
const columnThree = document.querySelector(`#code`);

keyPressed.addEventListener('keydown', (e) => {
    columnOne.innerHTML = `${e.key}`;
    columnTwo.innerHTML = `${e.keyCode}`;
    columnThree.innerHTML = `${e.code}`;
})

