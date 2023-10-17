const popup = document.getElementById('popup');

// array for all the book objects
const myLibrary = [];

// constructor for a new book object
class Book {
    constructor(title, author, genre, release) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.release = release;
    }

    synopsis() {
        return `The book ${title} was written by ${author} in ${release}.`
    }
}



const addBook = (e) => {
    e.preventDefault();
    let book = new Book(
        document.getElementById('book_title').value,
        document.getElementById('book_author').value,
        document.getElementById('book_genre').value,
        document.getElementById('book_release').value
    );

    myLibrary.push(book);
    document.querySelector('form').reset();

    console.log('added', {myLibrary});
    let title = document.querySelector('.book .title');
    title.textContent = myLibrary[0].title;

    let author = document.querySelector('.book .author');
    author.textContent = myLibrary[0].author;

    let genre = document.querySelector('.book .genre');
    genre.textContent = myLibrary[0].genre;

    let release = document.querySelector('.book .release');
    release.textContent = myLibrary[0].release;
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new_book').addEventListener('click', () => {
        popup.style = 'visibility: visible';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cancel_book').addEventListener('click', () => {
        popup.style = 'visibility: hidden';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add_book').addEventListener('click', addBook);
});