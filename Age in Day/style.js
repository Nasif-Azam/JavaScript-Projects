function result() {
    var age = document.getElementById('birthYear').value;
    if (!isNaN(age)) {

    } else {
        alert('Charecter not allowed in Age');
    }

    var ageInDay = (2020 - age) * 365;
    var h2 = document.createElement('h2');
    var text = document.createTextNode('You are ' + ageInDay + ' days old');
    h2.setAttribute('id', 'ageInDay');
    h2.appendChild(text);
    document.getElementById('ageResult').appendChild(h2);
    console.log(ageInDay);
}
function reset(){
    document.getElementById('ageInDay').remove();
}