const arr = [
  {
    portfolioList__img: "image/img7.jpg",
    overlay__text:
      "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу",
    list__title: "Технокряк",
    list__text: "Веб-сайт",
  },
  {
    portfolioList__img: "image/img8.jpg",
    overlay__text:
      "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу",
    list__title: "Постер New Orlean vs Golden Star",
    list__text: "Дизайн",
  },
  {
    portfolioList__img: "image/img9.jpg",
    overlay__text:
      "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу",
    list__title: "Ресторан Seafood",
    list__text: "Додаток",
  },
  {
    portfolioList__img: "image/img10.jpg",
    overlay__text:
      "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу",
    list__title: "Проєкт Prime",
    list__text: "Маркетинг",
  },
  {
    portfolioList__img: "image/img11.jpg",
    overlay__text:
      "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу",
    list__title: "Проєкт Boxes",
    list__text: "Додаток",
  },
  {
    portfolioList__img: "image/img12.jpg",
    overlay__text:
      "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу",
    list__title: "Inspiration has no Borders",
    list__text: "Веб-сайт",
  },
  {
    portfolioList__img: "image/img13.jpg",
    overlay__text:
      "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу",
    list__title: "Видання Limited Edition",
    list__text: "Дизайн",
  },
  {
    portfolioList__img: "image/img14.jpg",
    overlay__text:
      "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу",
    list__title: "Проєкт LAB",
    list__text: "Маркетинг",
  },
  {
    portfolioList__img: "image/img15.jpg",
    overlay__text:
      "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу",
    list__title: "Growing Business",
    list__text: "Додаток",
  },
];

const portfolioListEl = document.querySelector(".portfolio-list");

portfolioListEl.insertAdjacentHTML("beforeend", createPortfolioList(arr));
function createPortfolioList(arr) {
  return arr
    .map((el) => {
      return `<li class="portfolio-list__item">
            <a href="" class="portfolio-list__link">
              <div class="portfolio-list__img-box">
                <img src=${el.portfolioList__img} alt="notebook" class="portfolio-list__img" />
                <div class="overlay">
                  <p class="overlay__text">${el.overlay__text}</p>

                </div>

              </div>
              <div class="portfolio-list__text-box">
                <h2 class="portfolio-list__title">${el.list__title}</h2>
                <p class="portfolio-list__text">${el.list__text}</p>
              </div>
            </a>
          </li>`;
    })
    .join("");
}
