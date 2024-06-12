const navToggle = document.querySelector(".nav-bar__toggle");
const navBar = document.querySelector(".nav-bar__wrapper");

const onNavToggleClick = () => {
  navToggle.classList.add("nav-bar__toggle--opened");
  if (navBar.classList.contains("nav-bar__wrapper--closed")) {
    navBar.classList.remove("nav-bar__wrapper--closed");
    navBar.classList.add("nav-bar__wrapper--opened");
  } else {
    navToggle.classList.remove("nav-bar__toggle--opened");
    navBar.classList.add("nav-bar__wrapper--closed");
    navBar.classList.remove("nav-bar__wrapper--opened");
  }
};

navToggle.addEventListener("click", onNavToggleClick);
