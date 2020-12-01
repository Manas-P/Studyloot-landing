// Locomotive Scroll
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true,
//   multiplier:.7,
// });



// // Lottie Animation for Preloader
// var preloader=bodymovin.loadAnimation({
//     container:document.querySelector(".preloader"),
//     renderer:"svg",
//     loop:true,
//     autoplay:true,
//     path:"./assets/animation/preloader.json",
// });

// //Preloader
// window.addEventListener("load",()=>{
//     const preloader=document.querySelector(".preloader");
//     const main=document.querySelector(".main");
//     // preloader.delay(5000).fadeOut();
//     setTimeout(()=>{
//         preloader.classList.add("preloaderFinish");
//         main.classList.add("display");
//     },4000);
//     // console.log("Finish");
// })

//Typewriter
var typed = new Typed(".typing", {
  strings: [
    "Solution",
    "Code",
  ],
  typeSpeed: 70,
  backSpeed: 80,
  backDelay: 1500,
  showCursor: false,
  loop: true,
});