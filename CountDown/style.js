const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline_format h4');

let futureDate = new Date(2020, 10, 17, 00, 00, 0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = months[futureDate.getMonth()];
// month = months[month];

const date = futureDate.getDate();

const day = weekdays[futureDate.getDay()];
// day = weekdays[day]

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hour}:${minutes}am`;

// Future time in ms
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    // console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = t / oneDay;
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    // console.log(hours);
    // Set Value Array
    const values = [days,hours,minutes,seconds];

    function format(item){
        if(item < 10){
            return item = `0 ${item}`;
        }
        return item;
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Happy BirthDay Ananniya Lady</h4>`;
    }
}
// CountDown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();