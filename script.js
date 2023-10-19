// array for all the book objects

const library = [];

// constructor for a new book object
class Book {
    constructor(title, author, genre, release) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.release = release;
    }
}

const form = document.querySelector('form');

// function to add a new book

const addBook = form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // let book = new Book(
    //     document.getElementById('book_title').value,
    //     document.getElementById('book_author').value,
    //     document.getElementById('book_genre').value,
    //     document.getElementById('book_release').value
    // );

    const bookData = new FormData(form);
    let book = new Book();
    book = Object.fromEntries(bookData);
    library.push(book);

    document.querySelector('form').reset();

    let content = document.querySelector('#content');
    let firstBook = document.querySelector('#first-book');

    if (firstBook !== null) {
        let title = document.querySelector('.book .title');
        title.textContent = library[library.length - 1].title;
    
        let author = document.querySelector('.book .author');
        author.textContent = library[library.length - 1].author;
    
        let genre = document.querySelector('.book .genre');
        genre.textContent = library[library.length - 1].genre;
    
        let release = document.querySelector('.book .release');
        release.textContent = library[library.length - 1].release;

        firstBook.removeAttribute('id', 'first-book');
    } else {
        let newBookDiv = document.createElement('div');
        newBookDiv.classList.toggle('book');
        content.appendChild(newBookDiv);
    
        let newBookTitle = document.createElement('h3');
        newBookTitle.classList.toggle('title');
        newBookDiv.appendChild(newBookTitle);
        newBookTitle.textContent = library[library.length - 1].title;
    
        let newBookAuthor = document.createElement('p');
        newBookAuthor.classList.toggle('author');
        newBookDiv.appendChild(newBookAuthor);
        newBookAuthor.textContent = library[library.length - 1].author;
    
        let newBookGenre = document.createElement('p');
        newBookGenre.classList.toggle('genre');
        newBookDiv.appendChild(newBookGenre);
        newBookGenre.textContent = library[library.length - 1].genre;
    
        let newBookRelease = document.createElement('p');
        newBookRelease.classList.toggle('release');
        newBookDiv.appendChild(newBookRelease);
        newBookRelease.textContent = library[library.length - 1].release;

        let newBookButtons = document.createElement('div');
        newBookButtons.classList.toggle('book-buttons');
        newBookDiv.appendChild(newBookButtons);

        let newReadButton = document.createElement('button');
        newReadButton.classList.toggle('read-toggle');
        newReadButton.classList.toggle('unread');
        newBookButtons.appendChild(newReadButton);
        newReadButton.textContent = 'Unread';

        let newRemoveButton = document.createElement('button');
        newRemoveButton.classList.toggle('remove-book');
        newBookButtons.appendChild(newRemoveButton);
        newRemoveButton.textContent = 'Remove';
    }
});

// button controls

const popup = document.getElementById('popup');
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('new_book').addEventListener('click', () => {
        popup.style = 'display: block';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cancel_book').addEventListener('click', () => {
        popup.style = 'display: none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add_book').addEventListener('click', addBook);
    document.getElementById('add_book').addEventListener('click', () => {
        popup.style = 'display: none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.read-toggle').forEach(readButton => {
        readButton.addEventListener('click', () => {
            readButton.classList.toggle('unread');
            readButton.classList.toggle('read');
        
            if(readButton.classList.contains('read')) {
                readButton.textContent = 'Read';
            } else {
                readButton.textContent = 'Unread';
            }
        });
    });
});