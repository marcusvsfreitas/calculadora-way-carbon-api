import { Router } from "express";
import { createFuncionarioController } from "../modules/funcionarios/useCases/createFuncionario";
import { listFuncionariosController } from "../modules/funcionarios/useCases/listFuncionarios";

const funcionariosRoutes = Router();

funcionariosRoutes.post("/", (request, response) => {
  return createFuncionarioController.handle(request, response);
});

funcionariosRoutes.get("/", (request, response) => {
  return listFuncionariosController.handle(request, response);
});

export { funcionariosRoutes };