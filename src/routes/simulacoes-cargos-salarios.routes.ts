import { Router } from "express";
import { listSimulacoesCargosSalariosController } from "../modules/cargos_salarios/useCases/listSimulacoesCargosSalarios";

const simulacoesCargosSalariosRoutes = Router();

simulacoesCargosSalariosRoutes.get("/:id", (request, response) => {
  return listSimulacoesCargosSalariosController.handle(request, response);
});

export { simulacoesCargosSalariosRoutes };