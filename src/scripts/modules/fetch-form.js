import { makeBook, addBookToLibrary } from "./library.js";
import { displayBooks } from "./ui.js";
import { validateForm } from "./validate.js";

function fetchForm() {
  fetch("./book-form.html") // Seems need to use path relative to root
    .then((response) => response.text())
    .then(initForm);

  function initForm(formData) {
    const bookFormContainer = document.querySelector(".book-form-container");
    bookFormContainer.innerHTML = formData;

    const bookForm = document.getElementById("book-form");
    bookForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const errors = validateForm(bookForm);
      if (errors && errors.length > 0) event.target.reportValidity();
      else {
        const newBook = makeBook();
        addBookToLibrary(newBook);
        bookForm.reset();
      }

      displayBooks();
    });
  }
}

export { fetchForm };
