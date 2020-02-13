var modal = document.getElementById("mymodal");
var btn = document.getElementById("btn");
var close = document.getElementsByClassName("header__container-modal-close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};
close.onclick = function() {
  modal.style.display = "none";
};

const burger = document.querySelector(".burger"),
  nav = document.querySelector(".nav-links"),
  links = document.querySelectorAll(".nav-links li");

function slider() {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade .5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
  });
}
slider();

function openBtn() {
  var btnPortfolio = document.getElementById("btnPortfolio");
  var portfolio = document.getElementById("portfolio-open");
  var block = document.getElementById("closePorfolio");

  if (block.style.display == "none") {
    btnPortfolio.innerHTML = "Подробнее";
    block.style.display = "block";
    portfolio.style.display = "none";
  } else {
    btnPortfolio.innerHTML = "Скрыть";
    block.style.display = "none";
    portfolio.style.display = "block";
  }
}
