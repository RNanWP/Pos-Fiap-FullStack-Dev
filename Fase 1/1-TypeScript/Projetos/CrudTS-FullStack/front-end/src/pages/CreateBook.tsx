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
  const [imagem, setImagem] = useState("");

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
        imagem,
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
          placeholder="ISBN* (Somente números)"
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
          placeholder="Editora (opcional)"
          value={editora}
          onChange={(e) => setEditora(e.target.value)}
          className="form-input"
        />
        <label className="form-label">URL da imagem</label>
        <input
          type="text"
          placeholder="https://exemplo.com/imagem.jpg"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          className="form-input"
        />

        <label className="form-label">Ou selecione uma imagem</label>
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file) {
              const formData = new FormData();
              formData.append("imagem", file);

              try {
                const response = await api.post("/upload", formData, {
                  headers: { "Content-Type": "multipart/form-data" },
                });

                setImagem(response.data.url); // salva a URL recebida
              } catch (err) {
                alert("Erro ao enviar imagem.");
                console.error(err);
              }
            }
          }}
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
