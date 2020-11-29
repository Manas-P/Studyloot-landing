//Locomotive Scroll
 const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
}); 

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

//Button Ripple Effect
var root=document.documentElement;
document.addEventListener('mousedown',(e)=>{
  var el=e.target;
  var x=(e.clientX-el.offsetLeft)/el.offsetWidth;
  var y=(e.clientY-el.offsetTop)/el.offsetHeight;
  root.style.setProperty('--ripple-x',x);
  root.style.setProperty('--ripple-y',y);
})