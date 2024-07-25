document
  .querySelector("header nav .container .icon")
  .addEventListener("click", () => {
    document
      .querySelectorAll("header nav .container .icon i")
      .forEach((icon) => {
        icon.classList.toggle("show");
      });
    document
      .querySelector("header nav .container .links")
      .classList.toggle("show");
  });

document.querySelectorAll("header nav .container .links li").forEach((li) => {
  li.addEventListener("click", () => {
    document
      .querySelectorAll("header nav .container .icon i")
      .forEach((icon) => {
        icon.classList.toggle("show");
      });
    document
      .querySelector("header nav .container .links")
      .classList.toggle("show");
  });
});

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});
