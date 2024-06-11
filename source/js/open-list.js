const vacancyList = document.querySelector(".vacancy-list");
const advantagesList = document.querySelector(".advantages-list");

const onVacancyListClick = (event) => {
  if (event.target.matches(".button--open")) {
    event.target.classList.remove("button--open");
    event.target.classList.add("button--close");
    event.target
      .closest(".vacancy-list__item")
      .querySelector(".conditions-list")
      .classList.add("conditions-list--open");
  } else {
    event.target.classList.remove("button--close");
    event.target.classList.add("button--open");
    event.target
      .closest(".vacancy-list__item")
      .querySelector(".conditions-list")
      .classList.remove("conditions-list--open");
  }
};

const onAdvantagesListClick = (event) => {
  if (event.target.matches(".button--open")) {
    event.target.classList.remove("button--open");
    event.target.classList.add("button--close");
    event.target
      .closest(".advantages-list__item")
      .querySelector(".advantages-list__description")
      .classList.add("advantages-list__description--open");
  } else {
    event.target.classList.remove("button--close");
    event.target.classList.add("button--open");
    event.target
      .closest(".advantages-list__item")
      .querySelector(".advantages-list__description")
      .classList.remove("advantages-list__description--open");
  }
};

vacancyList.addEventListener("click", onVacancyListClick);
advantagesList.addEventListener("click", onAdvantagesListClick);
