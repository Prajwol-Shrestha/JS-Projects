const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container')



 window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    displayMenuBtns();

 });


 //filter Items


 function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
                   <img src="${item.img}" class="photo" alt="Menu Item">
                   <div class="item-content">
                       <header> 
                           <h2> ${item.title}</h2>
                           <h2> $ ${item.price}</h2>
                       </header>
                       <p class="item-text"> ${item.desc} </p>
                   </div>
               </article>`
    })

    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
 }


 function displayMenuBtns(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ['all'])

    const categoryBtns = categories.map((category) => {
        return `<button class="filter-btn" type="button" data-id = "${category}"> ${category} </button>`
    }).join("");

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll('.filter-btn');

    
    filterBtns.forEach( btn => {
        btn.addEventListener("click", function(e){
        const category  = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if( menuItem.category === category){
                return menuItem;
            }

        })
        if(category === 'all'){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }
        })
    })
 }