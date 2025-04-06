import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 3333;

app.get("/", (request, response) => {
  response.send("hello world");
});

app.listen(port, () => console.log(`listening on port ${port}!`));
