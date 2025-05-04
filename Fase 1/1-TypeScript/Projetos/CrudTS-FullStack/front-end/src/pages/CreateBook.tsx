import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [ano, setAno] = useState("");
  const [editora, setEditora] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !titulo.trim() ||
      !autor.trim() ||
      !isbn.trim() ||
      !ano.trim() ||
      !editora.trim()
    ) {
      alert("Preencha todos os campos antes de salvar.");
      return;
    }

    try {
      await api.post("/livros", {
        titulo,
        autor,
        isbn,
        ano: Number(ano),
        editora,
      });

      alert("Livro cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar livro.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Cadastrar livro</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Nome do Livro*"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Autor*"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="ISBN*(Somente números)"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Ano de publicação*"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Editora (opcional)"
          value={editora}
          onChange={(e) => setEditora(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
