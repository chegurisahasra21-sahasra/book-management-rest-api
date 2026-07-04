# Book Management REST API

## Objective

This project is a REST API built using Node.js and Express.js to perform CRUD operations on books without using any database.

## Features

- Get all books
- Get book by ID
- Add new book
- Update existing book
- Delete book
- JSON request and response
- Express middleware

## Technologies Used

- Node.js
- Express.js
- VS Code
- Postman

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/book-management-api.git
```

Move into project

```bash
cd book-management-api
```

Install dependencies

```bash
npm install
```

Run server

```bash
node server.js
```

Server

```
http://localhost:3000
```

## API Endpoints

### GET All Books

```
GET /books
```

### GET Book by ID

```
GET /books/:id
```

### POST Book

```
POST /books
```

JSON

```json
{
    "title":"Rich Dad Poor Dad",
    "author":"Robert Kiyosaki"
}
```

### PUT Book

```
PUT /books/1
```

```json
{
    "title":"Atomic Habits Updated",
    "author":"James Clear"
}
```

### DELETE Book

```
DELETE /books/1
```

## Project Structure

```
book-management-api/
│── package.json
│── server.js
│── README.md
│── .gitignore
└── screenshots/
```

## Learning Outcomes

- REST API
- CRUD Operations
- Express Routing
- Middleware
- JSON Handling
- HTTP Methods