const productsButtonBack = document.querySelector(".controls__button-prev");
const productsButtonForward = document.querySelector(
  ".controls__button-forward"
);
const productsCarousel = document.querySelector(".products-carousel");
const swiperPagination = document.querySelector(".swiper-pagination");

productsButtonForward.addEventListener("click", () => {
  productsCarousel.append(productsCarousel.children[0]);
  swiperPagination.prepend(
    swiperPagination.children[swiperPagination.children.length - 1]
  );
});

productsButtonBack.addEventListener("click", () => {
  productsCarousel.prepend(
    productsCarousel.children[productsCarousel.children.length - 1]
  );
  swiperPagination.append(swiperPagination.children[0]);
});
