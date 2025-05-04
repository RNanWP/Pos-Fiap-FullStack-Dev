import { useEffect, useState } from "react";
import { Book } from "../types/Book";
import { api } from "../api/api";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    api.get("/livros").then((res) => setBooks(res.data));
  }, []);

  const handleDelete = (id: string) => {
    // Atualiza a lista de livros removendo o livro deletado
    setBooks(books.filter((book) => book._id !== id));
  };

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book._id} book={book} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Home;
