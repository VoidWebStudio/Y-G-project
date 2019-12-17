var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});








// var hoverDistort = new hoverEffect({
//   parent: document.querySelector('.wrapper'),
//   intensity: 0.5,
//   image1: 'img/1.png',
//   image2: 'img/2.png',
//   displacementImage: 'img/4.png'

// });

// // Wrap every letter in a span
// var textWrapper = document.querySelector('.hero-title');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// $(document).ready(function() {

// $('.wrapper').hover(         
// function () {
// anime.timeline({loop: false})
// .add({
// targets: '.hero-title .letter',
// translateX: [80,0],
// translateZ: 0,
// opacity: [0,1],
// easing: "easeOutExpo",
// duration: 1400,
// delay: (el, i) => 100 + 40 * i
// })
// },

// function () {
// anime.timeline({loop: false})
// .add({
// targets: '.hero-title .letter',
// translateX: [0,-80],
// opacity: [1,0],
// easing: "easeInExpo",
// duration: 800,
// delay: (el, i) => 40 * i
// });         
// }
// );
  
// });