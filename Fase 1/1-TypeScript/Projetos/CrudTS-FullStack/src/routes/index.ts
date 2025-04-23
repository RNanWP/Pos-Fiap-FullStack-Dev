import { Router } from "express";

const router = Router();

// Rota simples para testar
router.get("/", (req, res) => {
  res.send("Hello from users route!");
});

export default router;
