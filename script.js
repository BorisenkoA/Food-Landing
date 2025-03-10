const search = document.querySelector(".header__menu-link.search");
const cart = document.querySelector(".header__menu-link.cart")

search.addEventListener("click", function(event) {
  event.preventDefault();
  alert("I am search icon");
})

cart.addEventListener("click", function(event) {
  event.preventDefault();
  alert("I am cart icon");
})

document.addEventListener("DOMContentLoaded", () => {
  const navbarItems = document.querySelectorAll(".main__navbar-item");

  navbarItems.forEach(item => {
      item.addEventListener("click", () => {
          navbarItems.forEach(nav => nav.classList.remove("active"));
          item.classList.add("active");
      });
  });
});