fetch("./src/data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    test(data);
  });

let actualSlide = 0;

const test = function (data) {
  let counter = 0;
  let slideNumber;
  for (const key in data) {
    slideNumber = `slide${counter}`;
    const figure = document.createElement("figure");
    figure.setAttribute("id", slideNumber);
    if (counter === 0) figure.classList.add("show");
    document.querySelector("#slides").appendChild(figure);

    const img = document.createElement("img");
    img.src = `data:image/jpeg;base64, ${data[key].img}`;
    img.style.width = "100%";
    document.querySelector(`#${slideNumber}`).appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `Medium by ${data[key].link} ${data[key].author}`;
    document.querySelector(`#${slideNumber}`).appendChild(figcaption);

    ++counter;
  }
};

const renderNext = function (img) {};

document.querySelector(".next").addEventListener("click", renderNext);

// "img0": {
//   "link": "https://www.flickr.com/photos/thomashawk/14586158819/",
//   "title": "Colorado",
//   "author": "Thomas Hawk",
//   "img": "123"
