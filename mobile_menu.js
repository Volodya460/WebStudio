const menuContainer = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");

openMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuContainer.classList.toggle("is-open");
  if (
    openMenuBtn.children[0].innerHTML ===
    `<use xlink:href="./image/sprite.svg#icon-close"></use>`
  ) {
    console.log("hello");
    return (openMenuBtn.children[0].innerHTML = `  <use xlink:href="./image/sprite.svg#mobile-menu"></use>`);
  }
  openMenuBtn.children[0].innerHTML = `<use xlink:href="./image/sprite.svg#icon-close"></use>`;
}

window.matchMedia("(min-width: 600px)").addEventListener("change", (e) => {
  if (e.matches) {
    openMenuBtn.children[0].innerHTML = `  <use xlink:href="./image/sprite.svg#mobile-menu"></use>`;
    menuContainer.classList.remove("is-open");
  }
});
