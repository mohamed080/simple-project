let valueDispalys = document.querySelectorAll(".count-digit");
let interval = 4000;

valueDispalys.forEach((valueDispaly) => {
  let startValue = 0;
  let endValue = parseInt(valueDispaly.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDispaly.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});


$(".carousel").carousel({
  interval: 2000,
});

