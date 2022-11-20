import { Router } from "express";
import { listVinculosController } from "../modules/funcionarios/useCases/listVinculos";

const vinculosRoutes = Router();

vinculosRoutes.get("/", (request, response) => {
  return listVinculosController.handle(request, response);
});

export { vinculosRoutes };