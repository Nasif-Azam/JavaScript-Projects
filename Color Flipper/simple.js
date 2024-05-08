// Simple BackGround Colors
const colorsArray = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    // get random number between 0-3
    const randomNumber = getRandomNumbers();
    console.log(randomNumber);
    document.body.style.backgroundColor = colorsArray[randomNumber];
    color.textContent = colorsArray[randomNumber];
});

function getRandomNumbers() {
    return Math.floor(Math.random() * colorsArray.length);
}

