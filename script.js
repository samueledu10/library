"use strict"

const myLibrary = [];

function Book(title, author, num_pages, read) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read;

    this.info = () => {
        return`${title} by ${author}, ${num_pages} pages, ${read ? "done reading":"not read yet"}`;
    }
}

function addBookToLibrary(title, author, num_pages, read) {
    myLibrary.push(new Book(title, author, num_pages, read));
}

addBookToLibrary("one", "sam", 400, false);
addBookToLibrary("two", "ed", 600, true);
addBookToLibrary("three", "alv", 200, true);
addBookToLibrary("four", "tor", 250, false);

function getBooks() {
    const booksContainer = document.querySelector(".books-container");

    for (let i = 0; i < myLibrary.length; ++i) {
        let book = document.createElement("div");
        book.classList.add("book");

        let title = document.createElement("div");
        title.classList.add("title");
        title.textContent = myLibrary[i].title;
        
        let author = document.createElement("div");
        author.classList.add("author");
        author.textContent = `Author: ${myLibrary[i].author}`;

        let num_pages = document.createElement("div");
        num_pages.classList.add("num-pages");
        num_pages.textContent = `Number of Pages: ${myLibrary[i].num_pages}`;

        let read = document.createElement("div");
        read.classList.add("read");
        read.textContent = `Status: ${myLibrary[i].read ? "read": "not read"}`;

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(num_pages);
        book.appendChild(read);
        booksContainer.appendChild(book);
    }
}

getBooks();