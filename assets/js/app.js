// // Lottie Animation for Preloader
// var preloader = bodymovin.loadAnimation({
//   container: document.querySelector(".preloader"),
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "./assets/animation/preloader.json",
// });

// //Preloader
// window.addEventListener("load", () => {
//   const preloader = document.querySelector(".preloader");
//   const main = document.querySelector(".main");
//   // preloader.delay(5000).fadeOut();
//   setTimeout(() => {
//     preloader.classList.add("preloaderFinish");
//     main.classList.add("display");
//   }, 4000);
//   // console.log("Finish");
// });

//Button Ripple Effect
Waves.attach("a");
Waves.init();

//Typewriter
var typed = new Typed(".typing", {
  strings: ["Solution", "Code"],
  typeSpeed: 70,
  backSpeed: 80,
  backDelay: 1500,
  showCursor: false,
  loop: true,
});

//Tilt Js
$(document).ready(function () {
  $(".card").tilt({
    maxTilt: 11,
  });
});

//Testimonial Section
const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for (let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener("click", function () {
    for (let j = 0; j < indicatorImages.length; j++) {
      indicatorImages[j].classList.remove("active");
    }
    this.classList.add("active");
    const id = this.getAttribute("data-id");
    for (let j = 0; j < slides.length; j++) {
      slides[j].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}
