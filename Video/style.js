const btn = document.querySelector('.switch_btn');
const video = document.querySelector('.video_container');

window.addEventListener('DOMContentLoaded', function(){

});

btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    }
    else{
        btn.classList.remove('slide');
        video.play();
    }
});

// Preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', function(){
    preloader.classList.add('hide_preloader');
});