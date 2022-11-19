import { Router } from 'express';
import { funcionariosRoutes } from './funcionarios.routes';

const router = Router();

router.get("/ping", (request, response) => {
  return response.json("Olá mundo")
});

router.use("/funcionarios", funcionariosRoutes);

export { router };