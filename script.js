// array for all the book objects
const myLibrary = [];

// constructor for a new book object
function Book(title, author, genre, release) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.release = release;
    this.synopsis = function() {
        return `The book ${title} was written by ${author} in ${release}.`
    };
};

const book1 = new Book('Hello World', 'Jo Mama', 'action', 1990);

function addBookToLibrary() {
    const popup = document.getElementById('popup');
    popup.style = 'visibility: visible';
};

function cancelSubmitBook() {
    const popup = document.getElementById('popup');
    popup.style = 'visibility: hidden';
}