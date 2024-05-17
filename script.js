// Varables for storeing access
const dialogButton = document.getElementById('dialog_button');
const saveButton = document.getElementById('save_data');
const dialogForm = document.getElementById('input_data');
const bookContainer = document.getElementById('content_container');
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
// Add Book function
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
    
    //debugging(titleName.value, authorName.value, pageNumber.value, readBook.value, myLibrary);
    reloadBookContent();
    showBook(myLibrary);
}

// create function for Book on Homepage

function showBook(array)
{
    array.forEach(element => {
        let container = document.createElement('div');
        container.classList.add('container');
        let titleHeader = document.createElement('h3');
        titleHeader.textContent = element.title;
        let authorHeader = document.createElement('h3');
        authorHeader.textContent = element.author;
        let pagesHeader = document.createElement('h3');
        pagesHeader.textContent = element.pages;
        let readHeader = document.createElement('button');
        readHeader.textContent = element.read;
        //debugging(titleHeader, authorHeader, pagesHeader, readHeader);
        let deleteHeader = document.createElement('button');
        deleteHeader.textContent = 'Delete';
        container.appendChild(titleHeader);
        container.appendChild(authorHeader);
        container.appendChild(pagesHeader);
        container.appendChild(readHeader);
        container.appendChild(deleteHeader);
        bookContainer.appendChild(container);
        // update Read Status
        readHeader.addEventListener('click', (e => {
            if(e.target.textContent === 'read')
            {
                e.target.textContent = 'not read';
            }
            else
            {
                e.target.textContent = 'read';
            }
        }));
        // delete Book
        deleteHeader.addEventListener('click', (e) => {

            myLibrary.splice(e.target,1);
            reloadBookContent();
            showBook(myLibrary);
        });

    });
}

// reload function
function reloadBookContent()
{
    bookContainer.replaceChildren();
}

// clear input function
function clearInput()
{
    titleName.value = '';
    authorName.value = '';
    pageNumber.value = '';
    readBook.selectedIndex = 0;
}


// debugging function for read Varables
function debugging(...value)
{
    console.log(...value);
}

saveButton.addEventListener('click', () => {
    addBookToLibrary();
    dialogForm.close();
    clearInput();
});