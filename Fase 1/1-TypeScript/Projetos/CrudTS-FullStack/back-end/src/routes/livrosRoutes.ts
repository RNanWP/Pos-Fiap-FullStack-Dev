import { Router } from "express";
import {
  criarLivro,
  listarLivros,
  buscarLivroPorId,
  atualizarLivro,
  deletarLivro,
} from "../controllers/livros";

const router = Router();

router.post("/", criarLivro);
router.get("/", listarLivros);
router.get("/:id", buscarLivroPorId);
router.put("/:id", atualizarLivro);
router.delete("/:id", deletarLivro);

export default router;
