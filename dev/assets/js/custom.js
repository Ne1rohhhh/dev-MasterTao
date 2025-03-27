const buttonBurger = document.querySelector('.btn-burger');
const mobileContainer = document.querySelector('.mobile-container');
const bodyNoScroll = document.querySelector('body');
const main = document.querySelector('main');

function checkClass() {
    mobileContainer.classList.toggle('show');
    bodyNoScroll.classList.toggle('overflow-hidden');
    buttonBurger.classList.toggle('active');
    main.classList.toggle('body-hidden');
}

buttonBurger.addEventListener('click', checkClass);

/*
if (main.classList.contains('overflow-hidden')) {
  main.classList.addClass('body-hidden')
}
*/

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

const swiper = new Swiper('.slider-info', {  
    spaceBetween: 12,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
    navigation:  {
      enabled: false
    },

    breakpoints: {
      992: {
        spaceBetween: 40,
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
});