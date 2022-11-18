import { Router } from "express";
import { createFuncionarioController } from "../modules/funcionarios/useCases/createFuncionario";

const baseRoutes = Router();

baseRoutes.post("/", (request, response) => {
  return createFuncionarioController.handle(request, response);
});

export { baseRoutes };