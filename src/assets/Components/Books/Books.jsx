import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books_data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-8">
      <h2 className="text-center text-5xl font-extrabold my-5">Books</h2>
      <div className="grid md:grid-cols-3 gap-3 justify-items-center">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
