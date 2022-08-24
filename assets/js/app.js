const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector("ul");
const header = document.querySelector(".header");
const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

for (const item of navItem) {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
}

document.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 180) header.style.backgroundColor = "#29323c";
  else header.style.backgroundColor = "transparent";
});
