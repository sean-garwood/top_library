class Book {
  constructor(title, author, releaseYear, genre, isRead = false) {
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.isRead = isRead;
  }
}

export { Book };
