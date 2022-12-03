import { Router } from "express";
import { createModeloCargoSalarioController } from "../modules/cargos_salarios/useCases/createModeloCargoSalario";
import { createModeloWithManySimulacaoCargoSalarioController } from "../modules/cargos_salarios/useCases/createModeloWithManySimulacaoCargoSalario";
import { findModeloCargoSalarioByIDController } from "../modules/cargos_salarios/useCases/findModeloCargoSalarioByID";
import { listModeloCargoSalarioController } from "../modules/cargos_salarios/useCases/listModeloCargoSalario";


const modelosCargosSalariosRoutes = Router();

modelosCargosSalariosRoutes.get("/", (request, response) => {
  return listModeloCargoSalarioController.handle(request, response);
});

modelosCargosSalariosRoutes.get("/:id", (request, response) => {
  return findModeloCargoSalarioByIDController.handle(request, response);
});

modelosCargosSalariosRoutes.post("/", (request, response) => {
  return createModeloCargoSalarioController.handle(request, response);
});

modelosCargosSalariosRoutes.post("/simulacoes", (request, response) => {
  return createModeloWithManySimulacaoCargoSalarioController.handle(request, response);
});

export { modelosCargosSalariosRoutes };