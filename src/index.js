//my version

let slides = [...document.querySelectorAll("figure")];
let pins = [...document.querySelectorAll(".pin")];
let actualSlide = 0;

//todo: actual pin highlighted when active

//While clicking pin slide changes
const changeSlideByPin = function (e) {
  slides[actualSlide].classList.remove("show");
  actualSlide = e.target.dataset.key;
  slides[actualSlide].classList.add("show");
};

//While clicking arrows slides change forward/bacward
const changeSlideByArrow = function (e) {
  switch (e.target.dataset.key) {
    case "next":
      slides[actualSlide].classList.remove("show");
      ++actualSlide;
      if (actualSlide >= slides.length) {
        actualSlide = 0;
      }
      slides[actualSlide].classList.add("show");
      break;

    case "prev":
      slides[actualSlide].classList.remove("show");
      --actualSlide;
      if (actualSlide < 0) {
        actualSlide = slides.length - 1;
      }
      slides[actualSlide].classList.add("show");
      break;
    default:
  }
};

// While clicking 'play' button, slides change every 3 sec.
// TODO stop timer when pin/arrow is clicked
let playing = true;
let timer;
const autoPlay = function (e) {
  if (playing) {
    playing = false;
    e.target.classList.add("on");
    timer = setInterval(changeSlideByTimer, 3000);
  } else {
    playing = true;
    e.target.classList.remove("on");
    clearInterval(timer);
  }
};

//function changing slides while play button clicked
// TODO: how to pass a parameter to changeSlideByArrow function - now it throws a bug
// because I refer to e. which in cSBA function is mouseEvent.
const changeSlideByTimer = function () {
  slides[actualSlide].classList.remove("show");
  ++actualSlide;
  if (actualSlide >= slides.length) {
    actualSlide = 0;
  }
  slides[actualSlide].classList.add("show");
};

pins.forEach((pin) => pin.addEventListener("click", changeSlideByPin));
document.querySelector(".next").addEventListener("click", changeSlideByArrow);
document.querySelector(".prev").addEventListener("click", changeSlideByArrow);
document.querySelector("#play").addEventListener("click", autoPlay);

//workshop version
