let books = []; 

function addBook() {
    const bookTitle = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const bookType = document.getElementById('bookType').value;
    const availability = document.getElementById('availability').value;

    const newBook = {
        title: bookTitle,
        author: author,
        isbn: isbn,
        type: bookType,
        availability: availability
    };

    books.push(newBook); // Add new book to the books array
    alert(`Book "${bookTitle}" added successfully!`);

    // Reset the form after submission
    document.getElementById('addBookForm').reset();
    return false; // Prevent page refresh
}

// This function is for searching books by title/author or by type
function searchBooks() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const bookTypeFilter = document.getElementById('bookTypeFilter').value;
    const bookList = document.getElementById('bookList');
    
    // Filter books based on query and type
    const filteredBooks = books.filter(book => {
        const matchesQuery = book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
        const matchesType = bookTypeFilter === "All" || book.type === bookTypeFilter;
        return matchesQuery && matchesType;
    });

    // Clear previous results
    bookList.innerHTML = "";

    // Display the filtered results
    filteredBooks.forEach(book => {
        const bookItem = document.createElement("li");
        bookItem.textContent = `${book.title} by ${book.author} - ${book.type} (${book.availability})`;
        bookList.appendChild(bookItem);
    });
}

// This function is for handling the issue and return of books
function issueReturnBook() {
    const bookId = document.getElementById('bookId').value;
    const action = document.getElementById('action').value;

    if (action === "issue") {
        alert(`Book with ID ${bookId} issued.`);
    } else {
        alert(`Book with ID ${bookId} returned.`);
    }

    return true;
}