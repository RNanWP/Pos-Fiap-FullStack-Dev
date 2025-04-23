import express from "express";
import { config } from "dotenv";
import routes from "./routes";

config();

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());
app.use("/users", routes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
