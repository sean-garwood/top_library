import { fetchForm } from "./fetch-form.js";

function init() {
  const newBookButton = document.querySelector(".add-book");

  newBookButton.addEventListener("click", fetchForm);
}

export { init };
