fetch("./src/data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    test(data);
  });

// let actualSlide = 0;

const test = function (data) {
  const slides = document.createElement("div");
  slides.setAttribute("id", "slides");
  slides.classList.add("slides");
  slides.setAttribute("tabindex", "1");
  slides.setAttribute("autofocus", "autofocus");
  document.querySelector(".wrapper").appendChild(slides);

  const nav = document.createElement("nav");
  document.querySelector(".wrapper").appendChild(nav);

  const ulList = document.createElement("ul");
  nav.appendChild(ulList);

  let counter = 0;
  let slideNumber;
  let pinNumber;
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

  const prev = document.createElement("div");
  prev.setAttribute("id", "prev");
  prev.classList.add("prev");
  prev.setAttribute("data-key", "prev");
  prev.innerHTML = "&laquo;";
  slides.appendChild(prev);

  const next = document.createElement("div");
  next.setAttribute("id", "next");
  next.classList.add("next");
  next.setAttribute("data-key", "next");
  next.innerHTML = "&raquo;";
  slides.appendChild(next);

  const playButton = document.createElement("button");
  playButton.setAttribute("id", "play");
  playButton.classList.add("play");
  playButton.setAttribute("data-key", "next");
  nav.appendChild(playButton);
};

// todo: loading bar

// "img0": {
//   "link": "https://www.flickr.com/photos/thomashawk/14586158819/",
//   "title": "Colorado",
//   "author": "Thomas Hawk",
//   "img": "123"
