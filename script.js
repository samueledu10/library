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

    displayBook(title, author, num_pages, read, myLibrary.length - 1);
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    let bookToRemove = document.querySelector(`[data-index="${index}"]`);
    bookToRemove.remove();

    for (let i = index; i < myLibrary.length; ++i) {
        let book = document.querySelector(`[data-index="${i + 1}"]`);
        book.setAttribute("data-index", i);
    }
}

function displayBook(title, author, num_pages, readStatus, index) {
    const booksContainer = document.querySelector(".books-container");

    let book = document.createElement("div");
    book.classList.add("book");

    book.setAttribute("data-index", `${index}`);

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = title;
    
    let authorDiv = document.createElement("div");
    authorDiv.classList.add("author");
    authorDiv.textContent = `Author: ${author}`;

    let num_pagesDiv = document.createElement("div");
    num_pagesDiv.classList.add("num-pages");
    num_pagesDiv.textContent = `Number of Pages: ${num_pages}`;

    let readBtn = document.createElement("button");
    readBtn.textContent = readStatus;

    readBtn.addEventListener("click", () => {
        if (readBtn.textContent === "read") {
            readBtn.textContent = "not read";
            readBtn.classList.add("not-read");
            myLibrary[index].read = "not-read";
        }
        else {
            readBtn.textContent = "read";
            readBtn.classList.add("read");
            myLibrary[index].read = "read";
        }
    });

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    delBtn.addEventListener("click", () => {
        deleteBook(index);
    })

    book.appendChild(titleDiv);
    book.appendChild(authorDiv);
    book.appendChild(num_pagesDiv);
    book.appendChild(readBtn);
    book.appendChild(delBtn);
    booksContainer.appendChild(book);
}

function displayBooks() {

    for (let i = 0; i < myLibrary.length; ++i) {
        displayBook(myLibrary[i].title, myLibrary[i].author, myLibrary[i].num_pages, myLibrary[i].read, i);
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
    //const isRead = isReadInput.value === "read" ? true : false;

    addBookToLibrary(titleInput.value, authorInput.value, num_pagesInput.value, isReadInput.value);

    modal.close();
    modalForm.reset();
    event.preventDefault();
});