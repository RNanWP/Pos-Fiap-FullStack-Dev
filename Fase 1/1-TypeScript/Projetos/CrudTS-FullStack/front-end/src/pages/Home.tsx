import { useEffect, useState } from "react";
import { Book } from "../types/Book";
import { api } from "../api/api";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    api.get("/books").then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Home;
