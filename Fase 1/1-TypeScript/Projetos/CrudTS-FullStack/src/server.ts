import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./config/mongo";
import livroRoutes from "./routes/livros";

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.use("/livros", livroRoutes);

app.get("/", (req, res) => {
  res.send("API da Biblioteca");
});

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  });
});
