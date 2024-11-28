const express = require("express");
const app = express();

let books = [
  { id: "b1", title: "Book One", description: "Description of book one", authorId: "a1" },
  { id: "b2", title: "Book Two", description: "Description of book two", authorId: "a2" },
];

let reviews = [
  { id: "r1", text: "Amazing book!", bookId: "b1" },
  { id: "r2", text: "Decent read.", bookId: "b2" },
];

let authors = [
  { id: "a1", name: "Author One", bio: "Bio of Author One" },
  { id: "a2", name: "Author Two", bio: "Bio of Author Two" },
];

app.get("/", (req, res) => res.send(books));

app.get("/books/:book_id", (req, res) => {
  const book_id = req.params.book_id;
  const book = books.find((b) => b.id === book_id);
  const author = authors.find((a) => a.id === (book.authorId ));
  res.send({
    id: book.id,
    title: book.title,
    description: book.description,
    authorId: book.authorId,
    name: author.name,
    bio: author.bio,
  });
});

app.get("/reviews", (req, res) => res.send(reviews));

app.get("/reviews/:review_id", (req, res) => {
  const review_id = req.params.review_id;
  const review = reviews.find((r) => r.id === review_id);
  const book = books.find((b) => b.id === (review.bookId));
  res.send({
    id: review.id,
    text: review.text,
    bookId: review.bookId,
    book_title: book.title,
  });
});

app.get("/authors", (req, res) => res.send(authors));

app.get("/authors/:author_id", (req, res) => {
  const author_id = req.params.author_id;
  const author = authors.find((a) => a.id === author_id);
  res.send(author)
});

app.listen(5556, () => console.log("Bookstore app is running on http://localhost:5556"));
