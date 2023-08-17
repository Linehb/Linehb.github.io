const burger = document.querySelector('.header .navigation .nav-bar .burger');
const mobile_burger = document.querySelector('.header .navigation .nav-bar ul');
const navigation_data = document.querySelectorAll('.header .navigation .nav-bar ul li a');
const header = document.querySelector('.header.container');

burger.addEventListener('click', () => {
    burger.classList.toggle('bar');
    mobile_burger.classList.toggle('bar');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;

    if (scroll_position > 250) {
        header.style.backgroundColor = 'hsl(180, 50%, 50%)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});
navigation_data.forEach((item) => {
    item.addEventListener('click', () => {
        burger.classList.toggle('bar');
        mobile_burger.classList.toggle('bar');
    });
});

function myFunction() {
    var dots = document.getElementById('dots');
    var moreText = document.getElementById('more');
    var btnText = document.getElementById('myBtn');
  
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Show Again';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Show Less'; 
      moreText.style.display = 'inline';
    }
  }