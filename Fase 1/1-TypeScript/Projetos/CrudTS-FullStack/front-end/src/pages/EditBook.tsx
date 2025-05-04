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
      await api.put(`/livros/${id}`, {
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

  useEffect(() => {
    api
      .get(`/livros/${id}`)
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

  return (
    <div className="form-container">
      <h2 className="form-title">Editar Livro</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) setIsbn(value);
          }}
          className="form-input"
        />
        <select
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          className="form-input"
        >
          <option value="">Selecione o ano</option>
          {Array.from({ length: 100 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          placeholder="Editora"
          value={editora}
          onChange={(e) => setEditora(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditBook;
