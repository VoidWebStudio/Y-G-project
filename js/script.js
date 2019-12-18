


// var $dipper = $('.dipper');

// $dipper.waypoint(function (){
//   $dipper.addClass('element2')
// });


// $(".dipper").typed({

//   strings: ["String 1","String 2","..."]

// });
// var typed = new Typed('.element2', {
//   strings: ['This is a JavaScript library', 'This is an ES6 module'],
//   smartBackspace: true // Default value
// });

// var waypoint = new Waypoint({
//   element: document.getElementsByClassName('dipper'),
//   handler: function(direction) {
//     element.classList.add("element2");
//   }
// })


var options = {
  strings: ["branding"],
  typeSpeed: 90,
  backSpeed: 80,
  loop: true,
  cursorChar: "|",
  backDelay: 5500,
  startDelay: 1000
};
var typed = new Typed(".element", options);

var type = {
  strings: ["Yudaev"],
  typeSpeed: 90,
  backSpeed: 80,
  loop: false,
  cursorChar: "",
  backDelay: 5500,
  startDelay: 1000
};

var typed = new Typed(".typed", type);

var type2 = {
  strings: ["Geravin"],
  typeSpeed: 90,
  backSpeed: 80,
  loop: false,
  cursorChar: "|",
  backDelay: 5500,
  startDelay: 1000
};

var typed = new Typed(".typed2", type2);

new WOW().init();

AOS.init();
