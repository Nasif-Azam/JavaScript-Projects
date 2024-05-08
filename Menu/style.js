const menu = [{
        id: 1,
        title: 'Kakra',
        category: 'breakfast',
        price: '300',
        img: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_380,c_fill,g_auto,h_214,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170302153529-garlic-crab.jpg',
        details: 'eriuteriguvsdoivsdppwoejgpoesighiu[erio ofgihersoigjerigjrdiopsgjhios[r jseoirgj[oseijgioe sjgroijgoiserjgoi rioejgioserj oerjoigjoerijg eriwgiojerio gjoierj g[',
    },
    {
        id: 2,
        title: 'Biryani',
        category: 'lunch',
        price: '200',
        img: 'https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg',
        details: 'eriuteriguvsdoivsdppwoejgpoesighiu[erio ofgihersoigjerigjrdiopsgjhios[r jseoirgj[oseijgioe sjgroijgoiserjgoi rioejgioserj oerjoigjoerijg eriwgiojerio gjoierj g[',
    },
    {
        id: 3,
        title: 'Pasta',
        category: 'dinner',
        price: '50',
        img: 'https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg',
        details: 'eriuteriguvsdoivsdppwoejgpoesighiu[erio ofgihersoigjerigjrdiopsgjhios[r jseoirgj[oseijgioe sjgroijgoiserjgoi rioejgioserj oerjoigjoerijg eriwgiojerio gjoierj g[',
    },
    {
        id: 4,
        title: 'Fruits',
        category: 'breakfast',
        price: '20',
        img: 'https://www.betterhealth.vic.gov.au/-/media/bhc/images/slideshow/healthy-snacking-tips/8-colour_24199230_1050x600.jpg?la=en&hash=A54B44988D468827026A6AA103418B0B2486C536',
        details: 'eriuteriguvsdoivsdppwoejgpoesighiu[erio ofgihersoigjerigjrdiopsgjhios[r jseoirgj[oseijgioe sjgroijgoiserjgoi rioejgioserj oerjoigjoerijg eriwgiojerio gjoierj g[',
    },
    {
        id: 5,
        title: 'Snaks',
        category: 'lunch',
        price: '80',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzR3YadgMaJgWRO6NdElEYgdvdLJDPLzaD8Q&usqp=CAU',
        details: 'eriuteriguvsdoivsdppwoejgpoesighiu[erio ofgihersoigjerigjrdiopsgjhios[r jseoirgj[oseijgioe sjgroijgoiserjgoi rioejgioserj oerjoigjoerijg eriwgiojerio gjoierj g[',
    },
    {
        id: 6,
        title: 'Ice Cream',
        category: 'dinner',
        price: '150',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFfefwoTEgoc8ptE91JayJXXgw-38AWOPG0Q&usqp=CAU',
        details: 'eriuteriguvsdoivsdppwoejgpoesighiu[erio ofgihersoigjerigjrdiopsgjhios[r jseoirgj[oseijgioe sjgroijgoiserjgoi rioejgioserj oerjoigjoerijg eriwgiojerio gjoierj g[',
    },
    {
        id: 7,
        title: 'Ruti',
        category: 'snaks',
        price: '550',
        img: 'https://m.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/01/24/Pictures/_f5e51382-3ea5-11ea-ae56-f909945546d5.jpg',
        details: 'eriuteriguvsdoivsdppwoejgpoesighiu[erio ofgihersoigjerigjrdiopsgjhios[r jseoirgj[oseijgioe sjgroijgoiserjgoi rioejgioserj oerjoigjoerijg eriwgiojerio gjoierj g[',
    },

];

const sectionCenter = document.querySelector('.section_center');
const btnContainer = document.querySelector('.btn_container');

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuBtns();
    // const categories = menu.map(function(item){
    //     return item.category;
    // });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);
        // return item;
        return `<article class="menu_item">
        <img src=${item.img} class="photo" alt=${item.title} >
        <div class="item_info">
            <header class="header m-3">
                <h4 class="mr-5">${item.title} </h4>
                <h4 class="price ml-5">${item.price} </h4>
            </header>
            <p class="item_text">
            ${item.details} 
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
    // console.log(categories);
    const categoryBtns = categories.map(function (category) {
        return `<button class="btn filter_btn" type="button" data-id=${category}> ${category} </button>`
    }).join('');
    // console.log(categoryBtns);
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll('.filter_btn');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = (e.currentTarget.dataset.id);
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            // console.log(menuCategory);
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}