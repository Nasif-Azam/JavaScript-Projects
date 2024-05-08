const reviews = [{
        id: 1,
        img: 'img/nasif.jpg',
        name: 'Smith',
        job: 'Photographer',
        details: 'eriuteriguvsdoivsdppwoejgpoesighiu[erio ofgihersoigjerigjrdiopsgjhios[r jseoirgj[oseijgioe sjgroijgoiserjgoi rioejgioserj oerjoigjoerijg eriwgiojerio gjoierj g[',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name: 'John',
        job: 'Developer',
        details: '935ywfhesnac,bsdhnzmclawfuiw ebseufnsiergiksjdgau sdgb;aerghioay kjuhsrghpao dgoiearhgoaihg oidgoasej[go rijego[iwjg ',
    },
    {
        id: 3,
        img: 'https://c6oxm85c.cloudimg.io/width/1200/png-lossless.fgaussian0.foil1/https://az617363.vo.msecnd.net/imgmodels/models/MD10004394/toni_img42c054de04969df05ee618d5eaf01e1e99_thumb_crop171ab53770ac976f6eff0d9fe8f4a35c_thumb.jpg',
        name: 'Azam',
        job: 'Python',
        details: 'sgjnsrgrpgko subfosfgnoseifjio sefhnoisefnisejfo efhiwoeijpomsjghapihao iuhohjiowar  las;f;4hwetip páejo[awtwrehagpirhgoer[ dhru',
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1557977275-d261356f567f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name: 'Tony',
        job: 'Robotics',
        details: 'ehfwioepokfopws sijgpowergk[-0 srogkp[erkg[epl srogp[ekgp[le[g saeglpe[rhpks drgpo[ogspaeohpazui 89578t9 swiuwefhptahq oitgseohwgi9aegh oirjgo[rjwh ',
    },
    {
        id: 5,
        img: 'https://s1.r29static.com/bin/entry/030/469x624,85/1563203/image.webp',
        name: 'Starck',
        job: 'SCADA',
        details: 'eriuteriguvsdoivsdppwoejgpoesighiu[erio ofgihersoigjerigjrdiopsgjhios[r jseoirgj[oseijgioe sjgroijgoiserjgoi rioejgioserj oerjoigjoerijg eriwgiojerio gjoierj g[',
    },
    {
        id: 6,
        img: 'https://www.addictedtomodels.com/img/models/95/0.jpg',
        name: 'Sins',
        job: 'Eng',
        details: 'suyfgbseifuhseiopfgpeir isrughaseriogjeorgj rgjeior ijhosierjh dirsoi odhitjweio oijh biorjwo[ oijgiw roigjoseih gposgjsoerp weitgoitg elkaiqg',
    },

];

// Select Items
const img = document.getElementById('person_img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prev_btn = document.querySelector('.prev_btn');
const nxt_btn = document.querySelector('.nxt_btn');
const random_btn = document.querySelector('.random_btn');

// Set starting item
let currentItem = 0;

//Load initial item 
window.addEventListener('DOMContentLoaded', function () {
    // const items = reviews[currentItem];
    // // console.log(items);
    // img.src = items.img;
    // author.textContent = items.name;
    // job.textContent = items.job;
    // info.textContent = items.details;
    // showPerson();
    showPerson(currentItem);
});

// Show person 

// function showPerson() {}
function showPerson(person) {
    const items = reviews[person];
    // const items = reviews[currentItem];
    img.src = items.img;
    author.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.details;
}

// show next person
nxt_btn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
    // showPerson();
});
// show prev person
prev_btn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
    // showPerson();
});

// Show random person

random_btn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    // console.log(currentItem);
    showPerson(currentItem);
});