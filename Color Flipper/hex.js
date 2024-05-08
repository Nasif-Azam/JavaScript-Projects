// Hex BackGround Colors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hex_btn = document.getElementById('hex_btn');
const hex_color = document.querySelector('.hex_color');

hex_btn.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomHexNumber()];
    }
    hex_color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomHexNumber(){
    return Math.floor( Math.random() * hex.length );
}