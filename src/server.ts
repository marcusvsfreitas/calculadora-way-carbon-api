import express from 'express';
import { baseRoutes } from './routes/funcionarios.routes';

const app = express();

app.use(express.json());

app.get("/ping", (request, response) => {
  return response.json("Olá mundo")
});

app.use("/funcionarios", baseRoutes);

app.listen(3333, () => console.log("Server is running!"));