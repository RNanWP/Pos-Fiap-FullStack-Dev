import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/">📚 CRUD LIBRARY</Link>
      </h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/criar" className="btn-create">
          Novo Livro
        </Link>
      </nav>
    </header>
  );
};

export default Header;
