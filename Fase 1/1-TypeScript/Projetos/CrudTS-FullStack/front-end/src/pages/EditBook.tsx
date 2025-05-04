import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [ano, setAno] = useState("");
  const [editora, setEditora] = useState("");

  useEffect(() => {
    api
      .get(`/books/${id}`)
      .then((res) => {
        const { titulo, autor, isbn, ano, editora } = res.data;
        setTitulo(titulo);
        setAutor(autor);
        setIsbn(isbn);
        setAno(String(ano));
        setEditora(editora);
      })
      .catch(() => {
        alert("Erro ao carregar dados do livro.");
        navigate("/");
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.put(`/books/${id}`, {
        titulo,
        autor,
        isbn,
        ano: Number(ano),
        editora,
      });
      alert("Livro atualizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar livro.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white mt-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Editar Livro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Ano de publicação"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Editora"
          value={editora}
          onChange={(e) => setEditora(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default EditBook;
