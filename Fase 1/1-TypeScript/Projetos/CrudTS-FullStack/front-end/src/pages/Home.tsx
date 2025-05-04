import { useEffect, useState } from "react";
import { Book } from "../types/Book";
import { api } from "../api/api";
import BookCard from "../components/BookCard";
import "../index.css";

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/livros")
      .then((res) => setBooks(res.data))
      .catch(() => alert("Erro ao carregar livros."))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id: string) => {
    setBooks(books.filter((book) => book._id !== id));
  };

  const filteredBooks = search.trim()
    ? books.filter(
        (book) =>
          book.titulo.toLowerCase().includes(search.toLowerCase()) ||
          book.autor.toLowerCase().includes(search.toLowerCase())
      )
    : books;

  if (loading) return <p>Carregando livros...</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por título ou autor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-input"
      />

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
