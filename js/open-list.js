const vacancyList = document.querySelector(".vacancy-list");
const advantagesList = document.querySelector(".advantages-list");

const onVacancyListClick = (event) => {
  if (event.target) {
    event.target
      .closest(".vacancy-list__item")
      .querySelector(".vacancy-list__button")
      .classList.toggle("button-more--close");

    event.target
      .closest(".vacancy-list__item")
      .querySelector(".conditions-list")
      .classList.toggle("conditions-list--open");
  }
};

const onAdvantagesListClick = (event) => {
  if (event.target) {
    event.target
      .closest(".advantages-list__item")
      .querySelector(".advantages-list__button")
      .classList.toggle("button-more--close");

    event.target
      .closest(".advantages-list__item")
      .querySelector(".advantages-list__description")
      .classList.toggle("advantages-list__description--open");
  }
};

vacancyList.addEventListener("click", onVacancyListClick);
advantagesList.addEventListener("click", onAdvantagesListClick);
