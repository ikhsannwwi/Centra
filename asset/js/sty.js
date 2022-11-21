

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
    let firstImgWidth = firstImg.clientWidth + 15;
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









const carousel2 = document.querySelector(".carousel-2__"),
firstImg2 = carousel2.querySelectorAll(".carousel-col-2__")[0];
// arrowIcons = document.querySelectorAll(".wraper__ i");

let isDragStart2 = false, isDragging2 = false, prevPageX2, prevScrollLeft2, positionDiff2;

const showHideIcons2 = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel2.scrollWidth - carousel2.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel2.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg2.clientWidth + 2; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel2 scroll left else add to it
        carousel2.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons2(), 60); // calling showHideIcons2 after 60ms
    });
});

const autoSlide2 = () => {
    // if there is no image left to scroll then return from here
    if(carousel2.scrollLeft - (carousel2.scrollWidth - carousel2.clientWidth) > -1 || carousel2.scrollLeft <= 0) return;

    positionDiff2 = Math.abs(positionDiff2); // making positionDiff2 value to positive
    let firstImgWidth = firstImg2.clientWidth + 15;
    // getting difference value that needs to add or reduce from carousel2 left to take middle img center
    let valDifference = firstImgWidth - positionDiff2;

    if(carousel2.scrollLeft > prevScrollLeft2) { // if user is scrolling to the right
        return carousel2.scrollLeft += positionDiff2 > firstImgWidth / 3 ? valDifference : -positionDiff2;
    }
    // if user is scrolling to the left
    carousel2.scrollLeft -= positionDiff2 > firstImgWidth / 3 ? valDifference : -positionDiff2;
}

const dragStart2 = (e) => {
    // updatating global variables value on mouse down event
    isDragStart2 = true;
    prevPageX2 = e.pageX || e.touches[0].pageX;
    prevScrollLeft2 = carousel2.scrollLeft;
}

const dragging2 = (e) => {
    // scrolling images/carousel2 to left according to mouse pointer
    if(!isDragStart2) return;
    e.preventDefault();
    isDragging2 = true;
    carousel2.classList.add("dragging");
    positionDiff2 = (e.pageX || e.touches[0].pageX) - prevPageX2;
    carousel2.scrollLeft = prevScrollLeft2 - positionDiff2;
    showHideIcons2();
}

const dragStop2 = () => {
    isDragStart2 = false;
    carousel2.classList.remove("dragging");

    if(!isDragging2) return;
    isDragging2 = false;
    autoSlide2();
}

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("touchstart", dragStart2);

document.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchmove", dragging2);

document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragStop2);






const carousel3 = document.querySelector(".carousel-3__"),
firstImg3 = carousel3.querySelectorAll(".carousel-col-3__")[0];
// arrowIcons = document.querySelectorAll(".wraper__ i");

let isDragStart3 = false, isDragging3 = false, prevPageX3, prevScrollLeft3, positionDiff3;

const showHideIcons3 = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel3.scrollWidth - carousel3.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel3.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel3.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg3.clientWidth + 2; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel3 scroll left else add to it
        carousel3.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons3(), 60); // calling showHideIcons3 after 60ms
    });
});

const autoSlide3 = () => {
    // if there is no image left to scroll then return from here
    if(carousel3.scrollLeft - (carousel3.scrollWidth - carousel3.clientWidth) > -1 || carousel3.scrollLeft <= 0) return;

    positionDiff3 = Math.abs(positionDiff3); // making positionDiff3 value to positive
    let firstImgWidth = firstImg3.clientWidth + 15;
    // getting difference value that needs to add or reduce from carousel3 left to take middle img center
    let valDifference = firstImgWidth - positionDiff3;

    if(carousel3.scrollLeft > prevScrollLeft3) { // if user is scrolling to the right
        return carousel3.scrollLeft += positionDiff3 > firstImgWidth / 3 ? valDifference : -positionDiff3;
    }
    // if user is scrolling to the left
    carousel3.scrollLeft -= positionDiff3 > firstImgWidth / 3 ? valDifference : -positionDiff3;
}

const dragStart3 = (e) => {
    // updatating global variables value on mouse down event
    isDragStart3 = true;
    prevPageX3 = e.pageX || e.touches[0].pageX;
    prevScrollLeft3 = carousel3.scrollLeft;
}

const dragging3 = (e) => {
    // scrolling images/carousel3 to left according to mouse pointer
    if(!isDragStart3) return;
    e.preventDefault();
    isDragging3 = true;
    carousel3.classList.add("dragging");
    positionDiff3 = (e.pageX || e.touches[0].pageX) - prevPageX3;
    carousel3.scrollLeft = prevScrollLeft3 - positionDiff3;
    showHideIcons3();
}

const dragStop3 = () => {
    isDragStart3 = false;
    carousel3.classList.remove("dragging");

    if(!isDragging3) return;
    isDragging3 = false;
    autoSlide3();
}

carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("touchstart", dragStart3);

document.addEventListener("mousemove", dragging3);
carousel3.addEventListener("touchmove", dragging3);

document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("touchend", dragStop3);