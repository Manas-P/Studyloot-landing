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