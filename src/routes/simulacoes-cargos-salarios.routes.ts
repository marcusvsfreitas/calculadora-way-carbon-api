import { Router } from "express";
import { changePercentualSimulacaoCargoSalarioController } from "../modules/cargos_salarios/useCases/changePercentualSimulacaoCargoSalario";
import { listSimulacoesCargosSalariosController } from "../modules/cargos_salarios/useCases/listSimulacoesCargosSalarios";

const simulacoesCargosSalariosRoutes = Router();

simulacoesCargosSalariosRoutes.get("/:id", (request, response) => {
  return listSimulacoesCargosSalariosController.handle(request, response);
});

simulacoesCargosSalariosRoutes.post("/change-percentual/:id", (request, response) => {
  return changePercentualSimulacaoCargoSalarioController.handle(request, response);
});

export { simulacoesCargosSalariosRoutes };