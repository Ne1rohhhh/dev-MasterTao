const buttonBurger = document.querySelector('.btn-burger');
const mobileContainer = document.querySelector('.mobile-container');
const bodyNoScroll = document.querySelector('body');

function checkClass() {
    mobileContainer.classList.toggle('show');
    bodyNoScroll.classList.toggle('overflow-hidden');
    buttonBurger.classList.toggle('active');
}

buttonBurger.addEventListener('click', checkClass);

/*
buttonBurger.addEventListener('click', function() {
    console.log('click');
})
*/

/*
function writeConsole() {
    console.log('click');
}

buttonBurger.addEventListener('click', writeConsole);
*/

