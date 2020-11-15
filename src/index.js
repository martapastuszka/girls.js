let slides = [...document.querySelectorAll("figure")];
let pins = [...document.querySelectorAll(".pin")];
let actualSlide = 0;

const changeSlideByPin = function (e) {
  slides[actualSlide].classList.remove("show");
  actualSlide = e.target.dataset.key;
  slides[actualSlide].classList.add("show");
};

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

pins.forEach((pin) => pin.addEventListener("click", changeSlideByPin));
document.querySelector(".next").addEventListener("click", changeSlideByArrow);
document.querySelector(".prev").addEventListener("click", changeSlideByArrow);
