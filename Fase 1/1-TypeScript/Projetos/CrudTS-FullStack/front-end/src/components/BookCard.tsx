import { Book } from "../types/Book";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{book.titulo}</h2>
      <p>
        <strong>Autor:</strong> {book.autor}
      </p>
      <p>
        <strong>ISBN:</strong> {book.isbn}
      </p>
      <p>
        <strong>Ano:</strong> {book.ano}
      </p>
      {book.editora && (
        <p>
          <strong>Editora:</strong> {book.editora}
        </p>
      )}
    </div>
  );
};

export default BookCard;
