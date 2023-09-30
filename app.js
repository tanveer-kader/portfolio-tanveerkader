///////////////////////////////////////////////////////////
// set current year
const yearEl = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearEl.innerHTML = `&copy; ${currentYear}`;

///////////////////////////////////////////////////////////
// make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".header");
const navlinksEL = document.querySelector(".nav-links");

btnNavEl.addEventListener("click", function () {
  navbarEl.classList.toggle("nav-open");
});

// navlinksEL.addEventListener("click", function () {
//   navbarEl.classList.remove("nav-open");
// });

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
