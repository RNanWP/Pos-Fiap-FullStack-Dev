import { Request, Response } from "express";
import { Livro } from "../models/Livro";

export const criarLivro = async (req: Request, res: Response) => {
  try {
    const novoLivro = new Livro(req.body);
    await novoLivro.save();
    res.status(201).json(novoLivro);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao criar livro", detalhes: err });
  }
};

export const listarLivros = async (_: Request, res: Response) => {
  const livros = await Livro.find();
  res.json(livros);
};

export const atualizarLivro = async (req: Request, res: Response) => {
  try {
    const livroAtualizado = await Livro.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(livroAtualizado);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao atualizar livro", detalhes: err });
  }
};

export const deletarLivro = async (req: Request, res: Response) => {
  try {
    await Livro.findByIdAndDelete(req.params.id);
    res.json({ mensagem: "Livro deletado com sucesso" });
  } catch (err) {
    res.status(400).json({ erro: "Erro ao deletar livro", detalhes: err });
  }
};
