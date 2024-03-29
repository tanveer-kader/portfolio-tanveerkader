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

const html = document.querySelector("html");

let flag = true;
btntheme.addEventListener("click", function () {
  if (flag) {
    html.setAttribute("data-theme", "theme-light");
    flag = false;
  } else {
    html.setAttribute("data-theme", "theme-dark");
    flag = true;
  }
});

///////////////////////////////////////////////////////////
// scroll smooth

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#")
        // back to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      else {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
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
