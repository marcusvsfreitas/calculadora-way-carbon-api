import { Router } from "express";
import { createFuncionarioController } from "../modules/funcionarios/useCases/createFuncionario";

const funcionariosRoutes = Router();

funcionariosRoutes.post("/", (request, response) => {
  return createFuncionarioController.handle(request, response);
});

export { funcionariosRoutes };