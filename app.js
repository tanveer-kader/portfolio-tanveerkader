///////////////////////////////////////////////////////////
// set current year
const yearEl = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearEl.innerHTML = `&copy; ${currentYear}`;

///////////////////////////////////////////////////////////
// sticky navigation

window.onscroll = function () {
  makeHeaderSticky();
};

const header = document.querySelector(".header");

const sticky = header.offsetTop;

function makeHeaderSticky() {
  if (window.scrollY > sticky) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
}
