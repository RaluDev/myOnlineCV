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

    if (nameValue !== "" && emailValue !== "" && messageValue !== "" && isEmail(emailValue)) {
        sendEmail();
    } else {
        console.log('Unable to send Email');
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



// Language switch

const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.langWrap a');
// About section
const titleEl = document.querySelector('.about__subtitle');
const descrEl = document.querySelector('.about__text');
const sectionTitle = document.querySelector('.section-title');
// Skills section
const skillsTitle = document.querySelector('#skills h2');
const skillsSub = document.querySelector('.skills__subtitle');
const skillsDescr = document.querySelector('.skills__text');
// Projects
const projectsTitle = document.querySelector('#work h2');
// Title heading
const firstP = document.querySelector('div.home__data p.first');
const secondP = document.querySelector('div.home__data p.second');
const thirdP = document.querySelector('div.home__data p.third');
//Button
const headingLink = document.querySelector('#home div.home__data a');
// Nav
const links = document.querySelectorAll('#nav-menu li .nav__link');



link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        // returns value of lang attribute
        const attr = el.getAttribute('language');

        // Change content for each element

        // About
        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].description;
        sectionTitle.textContent = data[attr].section;

        // Skills
        skillsTitle.textContent = data[attr].sectionSkills;
        skillsSub.textContent = data[attr].titleSkills;
        skillsDescr.textContent = data[attr].skillsDescription;
        projectsTitle.textContent = data[attr].titleProjects;

        // Title heading
        console.log(links);
        // console.log(secondP.textContent);
        // console.log(headingLink.textContent);

        firstP.textContent = data[attr].firstHeading;
        secondP.textContent = data[attr].secondHeading;
        thirdP.textContent = data[attr].thirdHeading;

        headingLink.textContent = data[attr].linkHeading;
  
        //Nav
        // Array.from(links);
        // console.log(links[0].textContent);
        const array = Array.from(links);
        console.log(links[0].textContent);
        links[0].textContent = data[attr].homeLink;
        links[1].textContent = data[attr].aboutLink;
        links[2].textContent = data[attr].skillsLink;
        links[3].textContent = data[attr].projectsLink;
    });
});


//Email
function sendEmail() {
    (function () {
        emailjs.init("user_Gq3fjDedBoSrfXICaXHZz");
    })();


    //set the parameter as per template param [https://dashboard.emailjs.com/templates]
    let name = document.querySelector('#firstName').value;
    let from = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    // insert dinamic values from my form
    var templateParams = {
        to_name: name,
        from_name: from,
        message_html: message,
        person_name: name
    };

    // send request
    emailjs.send('gmail', 'template_ksOeU31r', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED :(', error);
        });
}