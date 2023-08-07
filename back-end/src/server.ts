import express from "express";
import cors from "cors";
import AppDataSource from "./data-source";

const app = express();

app.use(
  cors({
    origin: "localhost:3001",
    credentials: true,
  })
);

const PORT = process.env.PORT || 3001;

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
