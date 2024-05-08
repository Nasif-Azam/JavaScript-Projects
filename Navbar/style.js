const nav_toggle = document.querySelector('.nav_toggle');
const links = document.querySelector('.links');
nav_toggle.addEventListener('click', function(){
    // links.style.display = 'block';
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("show_links")){
    //     links.classList.remove('show_links')
    // } else{
    //     links.classList.add('show_links')
    // }
    links.classList.toggle('show_links');
    
});