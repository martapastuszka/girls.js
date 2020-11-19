//my version

let slides = [...document.querySelectorAll("figure")];
let pins = [...document.querySelectorAll(".pin")];
let actualSlide = 0;

//While clicking pin slide changes
const changeSlideByPin = function (e) {
  clearInterval(timer);
  slides[actualSlide].classList.remove("show");
  pins[actualSlide].classList.remove("selected");
  actualSlide = e.target.dataset.key;
  slides[actualSlide].classList.add("show");
  pins[actualSlide].classList.add("selected");
  timer = setInterval(changeSlideByArrow, 3000);
};

//While clicking arrows slides change forward/bacward
const changeSlideByArrow = function (e) {
  //I use changeSlideByArrow instead of changeSlideByTimer for Autoplay
  // Solved: how to pass a parameter to changeSlideByArrow function - now it throws a bug
  // because I refer to e. which in cSBA function is mouseEvent.
  let tmp;
  if (e === undefined) tmp = "next";
  else tmp = e.target.dataset.key;
  switch (tmp) {
    case "next":
      clearInterval(timer);
      slides[actualSlide].classList.remove("show");
      pins[actualSlide].classList.remove("selected");
      ++actualSlide;
      if (actualSlide >= slides.length) {
        actualSlide = 0;
      }
      slides[actualSlide].classList.add("show");
      pins[actualSlide].classList.add("selected");
      timer = setInterval(changeSlideByArrow, 3000);
      break;

    case "prev":
      clearInterval(timer);
      slides[actualSlide].classList.remove("show");
      pins[actualSlide].classList.remove("selected");
      --actualSlide;
      if (actualSlide < 0) {
        actualSlide = slides.length - 1;
      }
      slides[actualSlide].classList.add("show");
      pins[actualSlide].classList.add("selected");
      timer = setInterval(changeSlideByArrow, 3000);
      break;
    default:
  }
};

// While clicking 'play' button, slides change every 3 sec.

let playing = true;
let timer;
const autoPlay = function (e) {
  if (playing) {
    playing = false;
    e.target.classList.add("on");
    timer = setInterval(changeSlideByArrow, 3000);
  } else {
    playing = true;
    e.target.classList.remove("on");
    clearInterval(timer);
  }
};

// function changing slides while play button clicked

// const changeSlideByTimer = function () {
//   slides[actualSlide].classList.remove("show");
//   ++actualSlide;
//   if (actualSlide >= slides.length) {
//     actualSlide = 0;
//   }
//   slides[actualSlide].classList.add("show");
// };

const executeOnLoad = function () {
  pins[actualSlide].classList.remove("selected");
  pins[0].classList.add("selected");
};

// executeOnLoad();

pins.forEach((pin) => pin.addEventListener("click", changeSlideByPin));
document.querySelector(".next").addEventListener("click", changeSlideByArrow);
document.querySelector(".prev").addEventListener("click", changeSlideByArrow);
document.querySelector("#play").addEventListener("click", autoPlay);

document.addEventListener("onload", executeOnLoad());

//workshop version
