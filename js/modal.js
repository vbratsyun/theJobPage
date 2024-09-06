const modalButton = document.querySelector(".button--modal");
const modalButtonSent = document.querySelector(".button--modal-sent");
const promoButton = document.querySelector(".promo__button");
const departmentButton = document.querySelector(".department__button");
const successesButton = document.querySelector(".successes__button");
const modalContainer = document.querySelector(".modal-container");
const modalContainerSent = document.querySelector(".modal-container--sent");

const onModalContainerKeyDown = (event) => {
  if (event.key === "Escape" || event.key === "escape") {
    modalContainer.classList.remove("modal-container--open");
    promoButton.addEventListener("click", onPromoButtonClick);
  }
};

const onModalContainerSentKeyDown = (event) => {
  if (event.key === "Escape" || event.key === "escape") {
    modalContainerSent.classList.remove("modal-container--open");
  }
};

const onPromoButtonClick = () => {
  modalContainer.classList.add("modal-container--open");
  promoButton.removeEventListener("click", onPromoButtonClick);
  document.addEventListener("keydown", onModalContainerKeyDown);
};

const onModalButtonClick = () => {
  if (modalContainer.matches(".modal-container--open")) {
    modalContainer.classList.remove("modal-container--open");
    promoButton.addEventListener("click", onPromoButtonClick);
  }
};

const onModalButtonSentClick = () => {
  if (modalContainerSent.matches(".modal-container--open")) {
    modalContainerSent.classList.remove("modal-container--open");
    promoButton.addEventListener("click", onPromoButtonClick);
  }
};

document.addEventListener("keydown", onModalContainerKeyDown);
document.addEventListener("keydown", onModalContainerSentKeyDown);
promoButton.addEventListener("click", onPromoButtonClick);
departmentButton.addEventListener("click", onPromoButtonClick);
successesButton.addEventListener("click", onPromoButtonClick);
modalButton.addEventListener("click", onModalButtonClick);
modalButtonSent.addEventListener("click", onModalButtonSentClick);

const applicationForm = document.querySelector(".application-form");

const handleFormSubmit = (event) => {
  event.preventDefault();
  modalContainerSent.classList.add("modal-container--open");
  modalContainer.classList.remove("modal-container--open");
};

applicationForm.addEventListener("submit", handleFormSubmit);
