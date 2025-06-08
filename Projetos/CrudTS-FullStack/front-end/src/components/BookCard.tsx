import { Link } from "react-router-dom";
import { Book } from "../types/Book";
import { api } from "../api/api";

interface BookCardProps {
  book: Book;
  onDelete: (id: string) => void;
}

const BookCard = ({ book, onDelete }: BookCardProps) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este livro?"
    );
    if (confirmDelete) {
      try {
        // Deletando o livro da API
        await api.delete(`/livros/${book._id!}`);
        onDelete(book._id!); // Chama a função do componente pai para atualizar a lista
      } catch (error) {
        console.error("Erro ao excluir livro", error);
        alert("Ocorreu um erro ao tentar excluir o livro.");
      }
    }
  };

  return (
    <div className="book-card__container">
      <div className="book-card">
        {/* Imagem do livro */}
        {book.imagemUrl && (
          <img src={book.imagemUrl} alt={book.titulo} className="book-image" />
        )}
        <h3 className="book-title">{book.titulo}</h3>
        <p>
          <strong>Autor:</strong> {book.autor}
        </p>
        <p>
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <p>
          <strong>Ano:</strong> {book.ano}
        </p>
        <p>
          <strong>Editora:</strong> {book.editora}
        </p>

        <div className="button-group">
          {/* Botão Editar */}
          <Link to={`/editar/${book._id!}`} className="btn edit-btn">
            Editar
          </Link>

          {/* Botão Excluir */}
          <button onClick={handleDelete} className="btn delete-btn">
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
