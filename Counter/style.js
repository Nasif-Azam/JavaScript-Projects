// // Initial Value
// let count = 0;
// // Select Value and Button
// let value = document.getElementById('value');
// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset');
// const increase = document.querySelector('.increase');

// decrease.addEventListener('click', function () {
//     count--;
//     // value.style.color = 'red';
//     value.textContent = count;
//     if (count<0){
//         value.style.color = 'red';
//     } else{
//         value.style.color = 'black';
//     }
// });

// reset.addEventListener('click', function () {
//     count = 0;
//     value.style.color = '#000';
//     value.textContent = count;
// });

// increase.addEventListener('click', function () {
//     count++;
//     // value.style.color = 'green';
//     value.textContent = count;
//     if (count>0){
//         value.style.color = 'green';
//     } else{
//         value.style.color = 'black';
//     }
// });



// Initial Value
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// console.log(btns);

btns.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener('click', function (e) {
        // console.log(e);
        const styles = e.currentTarget.classList;
        // console.log(styles);
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count < 0) {
            value.style.color = 'red';

        } else if (count > 0) {
            value.style.color = 'green';
        } else {
            value.style.color = 'blue';
        }
        value.textContent = count;
    });
});