import express  from "express";
import { AppDataSource } from "./database/data-source";
const app = express();

AppDataSource.initialize().then(async () => {
  console.log("Conecção com Banco ok!!!");

  app.listen(3333, () => {
    console.log("Rodando na porta 3333");
  });
});