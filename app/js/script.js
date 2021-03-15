const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function() {
    if (header.classList.contains('open')) { //close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else { //open hamburger menu 
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    }

});



// //aboutme
// const aboutmeBtn = document.querySelector('#aboutmeBtn');
// const aboutmeTxt = document.querySelector('#aboutmetxt ');
// const experienceBtn = document.querySelector('#experienceBtn')
// const experiencetxt = document.querySelector('#experiencetxt');

// experienceBtn.addEventListener('click', function() {
//     aboutmeTxt.classList.add('.hidetxt ');
//     experiencetxt.classList.add('.showtxt ');
// });
// aboutmeBtn.addEventListener('click', function() {
//     if (experiencetxt.classList.contains('.showtxt ')) {
//         experiencetxt.classList.remove('.showtxt');
//         experiencetxt.classList.add('.hidetxt');
//         aboutmetxt.classList.add('.showtxt');
//     }
// });