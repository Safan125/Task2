let currentIMG = 1;
displayimg(currentIMG);

function displayimg(img) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (img > slides.length) currentIMG = 1;
    else if (img < 1) currentIMG = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[currentIMG - 1].style.display = "block";
    dots[currentIMG - 1].className += " active";
}

function currentSlide(n) {
    displayimg((currentIMG = n));
}

function Slide(n) {
    displayimg((currentIMG += n));
}

// Start automatic sliding
let autoslide = setInterval(() => {
    Slide(1);
}, 3000);

// Function to stop the interval
function stopAutoSlide() {
    clearInterval(autoslide);
}

function Auto(){
    autoslide=setInterval(() => {
        Slide(1);
    }, 3000);
}

// Touch event handling
let startX = 0;

function handleTouchStart(e) {
    startX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        Slide(1);
    } else if (endX - startX > 50) {
        Slide(-1);
    }
}

// Add event listeners to stop auto-slide on interaction
document.querySelector(".container").addEventListener("touchstart", handleTouchStart);
document.querySelector(".container").addEventListener("touchend", handleTouchEnd);
document.querySelector(".container").addEventListener("mouseover", stopAutoSlide);
document.querySelector(".container").addEventListener("touchstart", stopAutoSlide);
document.querySelector(".container").addEventListener("mouseleave", Auto);
document.querySelector(".container").addEventListener("touchend", Auto);