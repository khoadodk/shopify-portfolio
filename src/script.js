'use strict';

// EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value; 
    let subject = document.getElementById("subject").value; 
    let message = document.getElementById("message").value; 

    let submitButton = document.querySelector('#contact-form button');


    const contactParams = {
      name,
      email,
      message,
      subject,
      phone
    }

    emailjs.send('service_pnzl6ai','template_ise53ph', contactParams)
        .then(function() {
            submitButton.innerHTML = 'SUCCESSFULLY SENT';
            submitButton.style.color = '#41ff41';
            console.log('SUCCESS!');
        }, function(error) {
            submitButton.innerHTML = 'Fail to send';
            console.log('FAILED...', error);
        });
});


/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});