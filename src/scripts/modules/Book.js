// FILE: modules/Book.js
export default class Book {
  constructor(title, author, releaseYear, genre, isRead = false) {
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear;
    this.genre = genre;
    // add a true/false property to the Book class called isRead
    this.isRead = isRead;
  }
}
