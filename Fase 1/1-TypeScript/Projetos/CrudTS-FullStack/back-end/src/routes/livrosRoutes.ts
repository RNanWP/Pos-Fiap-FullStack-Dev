import { Router } from "express";
import { upload } from "../config/multer";
import {
  criarLivro,
  listarLivros,
  buscarLivroPorId,
  atualizarLivro,
  deletarLivro,
} from "../controllers/livros";

const router = Router();

router.post("/", upload.single("imagem"), criarLivro);
router.get("/", listarLivros);
router.get("/:id", buscarLivroPorId);
router.put("/:id", upload.single("imagem"), atualizarLivro);
router.delete("/:id", deletarLivro);

export default router;
