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