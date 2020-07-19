// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    var nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');


//remove menu on click active link
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    //Active link
    navLink.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
    //console.log(this);

    //remove menu on click
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(link => link.addEventListener('click', linkAction));

