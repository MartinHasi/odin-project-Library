// Varables for storeing access
const dialogButton = document.getElementById('dialog_button');
const saveButton = document.getElementById('save_data');
const dialogForm = document.getElementById('input_data');
const titleName = document.querySelector('#book_name');
const authorName = document.querySelector('#author_name');
const pageNumber = document.querySelector('#book_pages');
const readBook = document.querySelector('#read_book');

// Open the Dialog
dialogButton.addEventListener('click', () => {
    dialogForm.showModal();
});

// Array 
const myLibrary = [];

// Create Book Object
function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary()
{
    if (myLibrary.length === 0)
    {
        myLibrary[0] = new Book(titleName.value, authorName.value, pageNumber.value, readBook.value);
    }
    else
    {
        myLibrary[myLibrary.length] = new Book(titleName.value, authorName.value, pageNumber.value, readBook.value);
    }
    //const book = new Book(titleName.value, authorName.value, pageNumber.value, readBook.value);
    //myLibrary.push(book);
    
    debugging(titleName.value, authorName.value, pageNumber.value, readBook.value, myLibrary);
    
}
function debugging(...value)
{
    console.log(...value);
}

saveButton.addEventListener('click', addBookToLibrary);