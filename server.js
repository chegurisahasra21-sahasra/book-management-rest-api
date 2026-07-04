const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory books array
let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Book Management REST API is Running...");
});

// GET All Books
app.get("/books", (req, res) => {
    res.status(200).json(books);
});

// GET Book by ID
app.get("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json(book);

});

// POST Add Book
app.post("/books", (req, res) => {

    const { title, author } = req.body;

    if (!title || !author) {

        return res.status(400).json({
            message: "Title and Author are required"
        });

    }

    const newBook = {

        id: books.length ? books[books.length - 1].id + 1 : 1,
        title,
        author

    };

    books.push(newBook);

    res.status(201).json({
        message: "Book Added Successfully",
        book: newBook
    });

});

// PUT Update Book
app.put("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const { title, author } = req.body;

    const book = books.find(book => book.id === id);

    if (!book) {

        return res.status(404).json({
            message: "Book not found"
        });

    }

    if (title) book.title = title;
    if (author) book.author = author;

    res.status(200).json({
        message: "Book Updated Successfully",
        book
    });

});

// DELETE Book
app.delete("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {

        return res.status(404).json({
            message: "Book not found"
        });

    }

    const deletedBook = books.splice(index, 1);

    res.status(200).json({
        message: "Book Deleted Successfully",
        deletedBook
    });

});

// Server
app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});