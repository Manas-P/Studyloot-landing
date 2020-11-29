// Lottie Animation for Preloader
var preloader=bodymovin.loadAnimation({
    container:document.querySelector(".preloader"),
    renderer:"svg",
    loop:true,
    autoplay:true,
    path:"./assets/animation/preloader.json",
});

//Preloader
window.addEventListener("load",()=>{
    const preloader=document.querySelector(".preloader");
    preloader.classList.add("preloaderFinish");
    console.log("Finish");
})