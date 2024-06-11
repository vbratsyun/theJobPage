const buttonBack = document.querySelector(".controls__button-prev--career");
const buttonForward = document.querySelector(
  ".controls__button-forward--career"
);
const careerCarousel = document.querySelector(".career-carousel");

buttonForward.addEventListener("click", () => {
  careerCarousel.append(careerCarousel.children[0]);
});

buttonBack.addEventListener("click", () => {
  careerCarousel.prepend(
    careerCarousel.children[careerCarousel.children.length - 1]
  );
});
