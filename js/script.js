const hamburger = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  });
});
