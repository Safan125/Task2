let currentIMG=1;
displayimg(currentIMG);

function displayimg(img){
var slides=document.getElementsByClassName("slide");
var dots=document.getElementsByClassName("dot");
if(img>slides.length)
    currentIMG=1;
else if(img<1)
    currentIMG=slides.length;
for(var i=0;i<slides.length; i++){
    slides[i].style.display="none";
}
for(var i=0;i<dots.length; i++)
dots[i].className=dots[i].className.replace(" active"," ");

slides[currentIMG - 1].style.display="block";
dots[currentIMG - 1].className+=" active";
}

function currentSlide(n){
    displayimg(currentIMG=n);
}
function Slide(n){
    displayimg(currentIMG+=n);
}
// Touch event handling
let startX = 0;

function handleTouchStart(e) {
    startX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        Slide(1); // Swipe left
    } else if (endX - startX > 50) {
        Slide(-1); // Swipe right
    }
}

// Add touch event listeners to the slider container
document.querySelector(".slider-container").addEventListener("touchstart", handleTouchStart);
document.querySelector(".slider-container").addEventListener("touchend", handleTouchEnd);