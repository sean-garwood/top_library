import { makeBook, addBookToLibrary } from './modules/library.js';
import { displayBooks } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const newBookButton = document.querySelector('.add-book-btn');
  const bookFormContainer = document.querySelector('.book-form-container');

  newBookButton.addEventListener('click', () => {
    fetch('book-form.html')
      .then(response => response.text())
      .then(data => {
        bookFormContainer.innerHTML = data;

        const bookForm = document.getElementById('book-form');
        bookForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const newBook = makeBook();
          addBookToLibrary(newBook);
          displayBooks();
        });
      })
      .catch(error => console.error('Error loading the form:', error));
  });
});
