import { Schema, model } from "mongoose";

const LivroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  isbn: { type: Number, required: true },
  ano: { type: Number, required: true },
  editora: { type: String },
  capa: { type: String },
});

export const Livro = model("Livro", LivroSchema);
