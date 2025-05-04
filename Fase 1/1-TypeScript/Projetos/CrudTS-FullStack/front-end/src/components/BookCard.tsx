import { Link } from "react-router-dom";
import { Book } from "../types/Book";
import { api } from "../api/api";

interface BookCardProps {
  book: Book;
  onDelete: (id: string) => void;
}

const BookCard = ({ book, onDelete }: BookCardProps) => {
  // const handleDelete = async () => {
  //    if (!book._id) {
  //      console.error("ID do livro não encontrado.");
  //      return;
  //    }

  //    // Asserção de tipo para garantir que _id é sempre string
  //    const id = book._id as string;

  //    const confirmDelete = window.confirm("Tem certeza que deseja excluir este livro?");
  //    if (confirmDelete) {
  //      try {
  //        // Deletando o livro da API
  //        await api.delete(`/books/${id}`);
  //        onDelete(id); // Chama a função do componente pai para atualizar a lista
  //      } catch (error) {
  //        console.error("Erro ao excluir livro", error);
  //        alert("Ocorreu um erro ao tentar excluir o livro.");
  //      }
  //    }
  //  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este livro?"
    );
    if (confirmDelete) {
      try {
        // Deletando o livro da API
        await api.delete(`/books/${book._id!}`);
        onDelete(book._id!); // Chama a função do componente pai para atualizar a lista
      } catch (error) {
        console.error("Erro ao excluir livro", error);
        alert("Ocorreu um erro ao tentar excluir o livro.");
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg">
      <h3 className="text-lg font-semibold">{book.titulo}</h3>
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

      <div className="mt-3">
        {/* Botão Editar */}
        <Link
          to={`/editar/${book._id!}`}
          className="inline-block bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 mr-2"
        >
          Editar
        </Link>

        {/* Botão Excluir */}
        <button
          onClick={handleDelete}
          className="inline-block bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default BookCard;
