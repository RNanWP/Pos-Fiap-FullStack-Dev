import { Router } from "express";
import {
  criarLivro,
  listarLivros,
  atualizarLivro,
  deletarLivro,
} from "../controllers/livros";

const router = Router();

router.post("/", criarLivro);
router.get("/", listarLivros);
router.put("/:id", atualizarLivro);
router.delete("/:id", deletarLivro);

export default router;
