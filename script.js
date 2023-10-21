const library = [];

class Book {
    constructor(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}

const form = document.querySelector('form');
const navBtn = document.getElementById('nav-btn');
const cancel = document.getElementById('cancel');

navBtn.addEventListener('click', () => {
    form.style = 'display: block';
});

cancel.addEventListener('click', () => {
    form.style = 'display: none';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const bookData = new FormData(form);
    let book = new Book();
    book = Object.fromEntries(bookData);
    library.push(book);

    document.querySelector('form').reset();
    form.style = 'display: none';

    let content = document.querySelector('#content');

    let newBlock = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let sBtn = document.createElement('button');
    let rmBtn = document.createElement('button');

    content.appendChild(newBlock);
    newBlock.appendChild(h3);
    newBlock.appendChild(p);
    newBlock.appendChild(sBtn);
    newBlock.appendChild(rmBtn);

    newBlock.classList.toggle('block');
    h3.textContent = library[library.length - 1].title;
    p.textContent = library[library.length - 1].author;
    sBtn.setAttribute('type', 'button');
    if (library[library.length - 1].status === 'unread') {
        sBtn.classList.toggle('unread');
        sBtn.textContent = 'Unread';
    } else {
        sBtn.classList.toggle('read');
        sBtn.textContent = 'Read';
    }
    rmBtn.setAttribute('type', 'button');
    rmBtn.classList.toggle('rm-book');
    rmBtn.textContent = 'Remove Book';

    sBtn.addEventListener('click', () => {
        if (sBtn.textContent === 'Unread') {
            sBtn.textContent = 'Read';
            sBtn.classList.toggle('read');
            sBtn.classList.toggle('unread');
        } else {
            sBtn.textContent = 'Unread';
            sBtn.classList.toggle('unread');
            sBtn.classList.toggle('read');
        }
    });

    rmBtn.addEventListener('click', () => {
        let rmConf = 'Are you sure you want to remove this book?';
        if (confirm(rmConf) == true) {
            newBlock.remove();
        }
    });
});