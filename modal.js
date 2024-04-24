const buttonEl = document.querySelector(".jsButton");
const modalEL = document.querySelector(".backdrop");
const jsFooterFormEl = document.querySelector(".jsFooterForm");
const modalFormEl = document.querySelector(".jsForm");
const formButtonEl = document.querySelector(".jsFormButton");
const checkboxEl = document.querySelector(".jsCheckbox");
const arrUsers = [];

buttonEl.addEventListener("click", openModal);
jsFooterFormEl.addEventListener("submit", sendMessage);
modalFormEl.addEventListener("submit", sendMessage);
checkboxEl.addEventListener("change", checkForm);

function openModal(e) {
  window.addEventListener("keydown", closeModal);
  modalEL.addEventListener("click", closeModal);
  modalEL.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}
function closeModal(e) {
  if (e.code === "Escape") {
    modalEL.classList.add("is-hidden");
    window.removeEventListener("keydown", closeModal);
    document.body.style.overflow = "auto";
  }
  if (e.currentTarget === e.target) {
    modalEL.classList.add("is-hidden");
    window.removeEventListener("keydown", closeModal);
    modalEL.removeEventListener("click", closeModal);

    document.body.style.overflow = "auto";
  }
}

function sendMessage(e) {
  e.preventDefault();
  let user = {};
  let data = new FormData(e.currentTarget);

  data.forEach((value, name) => {
    user[name] = value;
  });

  for (key in user) {
    if (!user[key] && key !== "coment") {
      return alert(`${key} is not`);
    }
  }

  e.currentTarget.reset();
  formButtonEl.disabled = true;
  arrUsers.push(user);

  console.log(arrUsers);
}
function checkForm(e) {
  formButtonEl.disabled = !e.currentTarget.checked;
}
