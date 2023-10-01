///////////////////////////////////////////////////////////
// set current year
const yearEl = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearEl.innerHTML = `&copy; ${currentYear}`;

///////////////////////////////////////////////////////////
// make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".header");
const navlinksEL = document.querySelectorAll(".nav-links");

btnNavEl.addEventListener("click", function () {
  navbarEl.classList.toggle("nav-open");
});

navlinksEL.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    console.log("cilck");
    navbarEl.classList.remove("nav-open");
  });
});

///////////////////////////////////////////////////////////
// add border bottom on scroll navigation
const header = document.querySelector(".header");
const sticky = header.offsetTop;

window.onscroll = function () {
  addborder();
};

function addborder() {
  if (window.scrollY > sticky) {
    header.classList.add("nav-scroll");
  } else {
    header.classList.remove("nav-scroll");
  }
}

///////////////////////////////////////////////////////////
// theme toggle
const btntheme = document.querySelector(".btn-theme-change");

btntheme.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});

///////////////////////////////////////////////////////////
// sticky navigation

// window.onscroll = function () {
//   makeHeaderSticky();
// };

// const header = document.querySelector(".header");

// const sticky = header.offsetTop;

// function makeHeaderSticky() {
//   if (window.scrollY > sticky) {
//     document.body.classList.add("sticky");
//   } else {
//     document.body.classList.remove("sticky");
//   }
// }
