class Bookstore {
    constructor() {
        this.books = new Map();
    }

    addBook(isbn, { title, author, genre, price, description }) {
        this.books.set(isbn, {
            title,
            author,
            genre,
            price,
            description,
            addedToCollection: false,
        });
    }

    filterBooks({ genre, author, priceRange }) {
        return Array.from(this.books.values()).filter((book) => {
            return (
                (!genre || book.genre === genre) &&
                (!author || book.author === author) &&
                (!priceRange || (book.price >= priceRange[0] && book.price <= priceRange[1]))
            );
        });
    }

    searchBooks(query) {
        const lowerQuery = query.toLowerCase();
        return Array.from(this.books.values()).filter((book) => {
            return (
                book.title.toLowerCase().includes(lowerQuery) ||
                book.author.toLowerCase().includes(lowerQuery)
            );
        });
    }

    markAsAdded(isbn) {
        if (this.books.has(isbn)) {
            this.books.get(isbn).addedToCollection = true;
        }
    }
}

class PersonalCollection {
    constructor() {
        this.collection = new Map();
    }

    addBook(isbn, bookDetails) {
        if (!this.collection.has(isbn)) {
            this.collection.set(isbn, bookDetails);
        }
    }

    removeBook(isbn) {
        this.collection.delete(isbn);
    }

    filterBooks({ genre, author }) {
        return Array.from(this.collection.values()).filter((book) => {
            return (
                (!genre || book.genre === genre) &&
                (!author || book.author === author)
            );
        });
    }

    searchBooks(query) {
        const lowerQuery = query.toLowerCase();
        return Array.from(this.collection.values()).filter((book) => {
            return (
                book.title.toLowerCase().includes(lowerQuery) ||
                book.author.toLowerCase().includes(lowerQuery)
            );
        });
    }
}
