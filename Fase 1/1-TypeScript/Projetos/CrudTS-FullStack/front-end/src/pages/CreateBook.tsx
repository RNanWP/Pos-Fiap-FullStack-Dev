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

    if (!titulo || !autor || !isbn || !ano) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      await api.post("/books", {
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
    <div className="max-w-xl mx-auto p-4 bg-white mt-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Livro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título*"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Autor*"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="ISBN*"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Ano de publicação*"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Editora (opcional)"
          value={editora}
          onChange={(e) => setEditora(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
