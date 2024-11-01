const menu = document.querySelector('.menu-icon');
const closed = document.querySelector('.close-icon');
const verticalNavBar = document.querySelector('.vertical-list');




menu.addEventListener('click', (e)=>{
    menu.style.display = 'none';
    closed.style.display = 'block'
    verticalNavBar.style.display = 'flex';
})
closed.addEventListener('click', (e)=>{
    closed.style.display = 'none';
    menu.style.display = 'block'
    verticalNavBar.style.display = 'none'
 
})
