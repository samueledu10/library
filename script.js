"use strict"

const myLibrary = [];

const openModal = document.querySelector(".open");
const closeModal = document.querySelector(".close");
const modal = document.querySelector(".modal");

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

    const booksContainer = document.querySelector(".books-container");

    let book = document.createElement("div");
    book.classList.add("book");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = title;
    
    let authorDiv = document.createElement("div");
    authorDiv.classList.add("author");
    authorDiv.textContent = `Author: ${author}`;

    let num_pagesDiv = document.createElement("div");
    num_pagesDiv.classList.add("num-pages");
    num_pagesDiv.textContent = `Number of Pages: ${num_pages}`;

    let readDiv = document.createElement("div");
    readDiv.classList.add("read");
    readDiv.textContent = `Status: ${read ? "read": "not read"}`;

    book.appendChild(titleDiv);
    book.appendChild(authorDiv);
    book.appendChild(num_pagesDiv);
    book.appendChild(readDiv);
    booksContainer.appendChild(book);
}

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

openModal.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
});

const modalForm = document.getElementById("modal-form");

modalForm.addEventListener("submit", (event) => {

    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const num_pagesInput = document.getElementById("num-pages");
    const isReadInput = document.getElementById("has-read");
    const isRead = isReadInput.value === "read" ? true : false;

    addBookToLibrary(titleInput.value, authorInput.value, num_pagesInput.value, isRead);

    modal.close();
    modalForm.reset();
    event.preventDefault();
});