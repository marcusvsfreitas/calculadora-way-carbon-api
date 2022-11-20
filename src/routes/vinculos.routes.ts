import { Router } from "express";
import { createVinculoController } from "../modules/funcionarios/useCases/createVinculo";
import { listVinculosController } from "../modules/funcionarios/useCases/listVinculos";

const vinculosRoutes = Router();

vinculosRoutes.get("/", (request, response) => {
  return listVinculosController.handle(request, response);
});

vinculosRoutes.post("/", (request, response) => {
  return createVinculoController.handle(request, response);
});

export { vinculosRoutes };