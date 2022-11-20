import { Router } from "express";
import { createFuncionarioController } from "../modules/funcionarios/useCases/createFuncionario";
import { findByIDFuncionarioController } from "../modules/funcionarios/useCases/findFuncionarioByID";
import { listFuncionariosController } from "../modules/funcionarios/useCases/listFuncionarios";

const funcionariosRoutes = Router();

funcionariosRoutes.post("/", (request, response) => {
  return createFuncionarioController.handle(request, response);
});

funcionariosRoutes.get("/", (request, response) => {
  return listFuncionariosController.handle(request, response);
});

funcionariosRoutes.get("/:id", (request, response) => {
  return findByIDFuncionarioController.handle(request, response);
});

export { funcionariosRoutes };