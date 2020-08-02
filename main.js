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

    //remove mobile menu on click
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(link => link.addEventListener('click', linkAction));


// Scroll animation
const scroll = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Home
scroll.reveal('.home__title',{});
scroll.reveal('.button',{delay: 200});
scroll.reveal('.home__img',{delay: 400});
scroll.reveal('.home__social-icon',{interval: 200});

// About
scroll.reveal('.about__img',{});
scroll.reveal('.about__subtitle',{delay: 400});
scroll.reveal('.about__text',{delay: 400});

// Skills
scroll.reveal('.skills__subtitle',{}); 
scroll.reveal('.skills__text',{}); 
scroll.reveal('.skills__data',{interval: 200}); 
scroll.reveal('.skills__img',{delay: 600});

// Projects
scroll.reveal('.work__img',{interval: 200}); 

// Contact
scroll.reveal('.contact__input',{interval: 200}); 




// Validation

document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();

    checkInputs();
});

function checkInputs() {
    const name = document.getElementById('firstName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');


    //get the values from the inputs
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === "") {
        //show error / add error class
        setErrorFor(name, 'Name cannot be blank');
    } else {
        //add success class
        setSuccessFor(name);
    }

    if (emailValue === "") {
        //show error / add error class
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }


    if (messageValue === "") {
        //show error / add error class
        setErrorFor(message, 'Message cannot be blank');
    } else {
        //add success class
        setSuccessFor(message);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error msg inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}