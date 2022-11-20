

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar__');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}



var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);


var ratingBtn = document.getElementsByClassName('btn__');
var ratingSlide = document.getElementById('slide-rating');

ratingBtn[0].onclick = function(){
    if (window.innerWidth<768) {
        ratingSlide.style.transform = 'translateX(0px)';
    }if(window.innerWidth>1200){
        ratingSlide.style.transform = 'translateX(0px)';
    }
    for (i = 0; i < 4; i++) {
        ratingBtn[i].classList.remove('active-rating__');
    }
    this.classList.add('active-rating__');
}
ratingBtn[1].onclick = function(){
    if (window.innerWidth<768) {
        ratingSlide.style.transform = 'translateX(-240px)';
    }if(window.innerWidth>1200){
        ratingSlide.style.transform = 'translateX(-800px)';
    }
    for (i = 0; i < 4; i++) {
        ratingBtn[i].classList.remove('active-rating__');
    }
    this.classList.add('active-rating__');
}
ratingBtn[2].onclick = function(){
    if (window.innerWidth<768) {
        ratingSlide.style.transform = 'translateX(-490px)';
    }if(window.innerWidth>1200){
    ratingSlide.style.transform = 'translateX(-1600px)';
    }
    for (i = 0; i < 4; i++) {
        ratingBtn[i].classList.remove('active-rating__');
    }
    this.classList.add('active-rating__');
}
ratingBtn[3].onclick = function(){
    if (window.innerWidth<768) {
        ratingSlide.style.transform = 'translateX(-740px)';
    }if(window.innerWidth>1200){
        ratingSlide.style.transform = 'translateX(-2400px)';
    }
    for (i = 0; i < 4; i++) {
        ratingBtn[i].classList.remove('active-rating__');
    }
    this.classList.add('active-rating__');
}




// const carousel = document.querySelector('.carousel__')
// arrowIcons = document.querySelector('.wraper__ i')

// let isDragStart = false, prevPageX, prevScrollLeft;

// const dragStarts = (e) =>{
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e)=> {
//     if(!isDragStart) return;
//     e.preventDefault();
//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// const dragStop = ()=>{
//     isDragStart = false;
// }

// carousel.addEventListener('mousedown',dragStarts)
// carousel.addEventListener('mousemove',dragging)
// carousel.addEventListener('mouseup',dragStop)


const carousel = document.querySelector(".carousel__"),
firstImg = carousel.querySelectorAll(".carousel-col__")[0],
arrowIcons = document.querySelectorAll(".wraper__ i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 2; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);