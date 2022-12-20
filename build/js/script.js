let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

document
  .querySelectorAll('.about .image-container .controls .control-btn')
  .forEach((btn) => {
    btn.onclick = () => {
      let src = btn.getAttribute('data-src');
      document.querySelector('.about .image-container .about-image').src = src;
    };
  });

//Sticky Navigation Bar On Scroll
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//https://www.youtube.com/watch?v=6HFpw5fcaD8
