const navToggle = document.querySelector(".nav-bar__toggle");
const navBar = document.querySelector(".nav-bar");

navBar.classList.remove("nav-bar--nojs");

const onNavToggleClick = () => {
  if (navBar.classList.contains("nav-bar--closed")) {
    navBar.classList.remove("nav-bar--closed");
    navBar.classList.add("nav-bar--opened");
  } else {
    navBar.classList.add("nav-bar--closed");
    navBar.classList.remove("nav-bar--opened");
  }
};

navToggle.addEventListener("click", onNavToggleClick);
