// pegando valores
const elementos = {
    header: document.querySelector(".header"),
};

// func header scroll
let scrollP = 0;

window.addEventListener("scroll", function() {
  const scrollN = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollN < scrollP) {
    elementos.header.style.position = "fixed";
  } else {
    elementos.header.style.position = "absolute";
  }

  scrollP = scrollN;
});