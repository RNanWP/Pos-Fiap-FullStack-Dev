import { useEffect, useState } from "react";
import { Book } from "../types/Book";
import { api } from "../api/api";
import BookCard from "../components/BookCard";
import "../index.css";

const ITEMS_PER_PAGE = 9;

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Estado de paginação
  const [currentPage, setCurrentPage] = useState(1);

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

  // Filtrando livros pela pesquisa
  const filteredBooks = search.trim()
    ? books.filter(
        (book) =>
          book.titulo.toLowerCase().includes(search.toLowerCase()) ||
          book.autor.toLowerCase().includes(search.toLowerCase())
      )
    : books;

  // Cálculo de paginação
  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBooks = filteredBooks.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );

  // Funções de navegação
  const goToPage = (page: number) =>
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));

  if (loading) return <p>Carregando livros...</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por título ou autor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="book-grid">
        {paginatedBooks.map((book) => (
          <BookCard key={book._id} book={book} onDelete={handleDelete} />
        ))}
      </div>

      {/* Se houver mais de uma página, exibe os controles de navegação */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={index + 1 === currentPage ? "active" : ""}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próximo
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
