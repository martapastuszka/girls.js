fetch("./src/data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    test(data);
  });

// let actualSlide = 0;
//todo: how to shorten the time between page loading and page displaying?

const prevBtn = document.querySelector("#prev");
const slides = document.querySelector("#slides");

const test = function (data) {
  const ulList = document.createElement("ul");
  document.querySelector("nav").appendChild(ulList);

  let counter = 0;
  let slideNumber;
  let pinNumber;
  for (const key in data) {
    slideNumber = `slide${counter}`;
    const figure = document.createElement("figure");
    figure.setAttribute("id", slideNumber);
    if (counter === 0) figure.classList.add("show");
    // document.querySelector("#slides").appendChild(figure);
    slides.insertBefore(figure, prevBtn);

    const img = document.createElement("img");
    img.src = `data:image/jpeg;base64, ${data[key].img}`;
    img.style.width = "100%";
    document.querySelector(`#${slideNumber}`).appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `${data[key].title} by ${data[key].author}`;
    document.querySelector(`#${slideNumber}`).appendChild(figcaption);

    //to do: ${data[key].link} // fix a href
    // "Colorado colors" by
    // <a href="https://www.flickr.com/photos/cptspock/2857543585"
    //   >Jasen Miller</a

    const liElement = document.createElement("li");
    document.querySelector("ul").appendChild(liElement);
    pinNumber = `pin${counter}`;
    const pin = document.createElement("button");
    pin.setAttribute("id", pinNumber);
    pin.setAttribute("data-key", counter);
    pin.classList.add("pin");
    liElement.appendChild(pin);

    ++counter;
  }
};

// todo: loading bar

// "img0": {
//   "link": "https://www.flickr.com/photos/thomashawk/14586158819/",
//   "title": "Colorado",
//   "author": "Thomas Hawk",
//   "img": "123"
