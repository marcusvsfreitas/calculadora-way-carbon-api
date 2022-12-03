import { Router } from "express";
import { createModeloCargoSalarioController } from "../modules/cargos_salarios/useCases/createModeloCargoSalario";
import { listModeloCargoSalarioController } from "../modules/cargos_salarios/useCases/listModeloCargoSalario";


const modelosCargosSalariosRoutes = Router();

modelosCargosSalariosRoutes.get("/", (request, response) => {
  return listModeloCargoSalarioController.handle(request, response);
});

modelosCargosSalariosRoutes.post("/", (request, response) => {
  return createModeloCargoSalarioController.handle(request, response);
});

export { modelosCargosSalariosRoutes };