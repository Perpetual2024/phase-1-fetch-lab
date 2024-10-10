/*function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
       fetch('https://anapioficeandfire.com/api/books', renderBooks)
       .then((response=> response.json())
       

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    
  });
  
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
*/
// index.js

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
    });
}

function renderBooks(books) {
  const mainElement = document.querySelector('main');
  books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.textContent = book.name; // Assuming the book object has a 'name' property
    mainElement.appendChild(bookElement);
  });
}

// Expose functions for testing
window.fetchBooks = fetchBooks;
window.renderBooks = renderBooks;
