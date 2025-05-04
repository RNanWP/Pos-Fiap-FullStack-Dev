import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">📚 Biblioteca CRUD</Link>
      </h1>
      <nav>
        <Link
          to="/criar"
          className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-100"
        >
          + Adicionar Livro
        </Link>
      </nav>
    </header>
  );
};

export default Header;
