import { Router } from "express";
import { listCargosSalariosController } from "../modules/cargos_salarios/useCases/listCargosSalarios";


const cargosSalariosRoutes = Router();

cargosSalariosRoutes.get("/", (request, response) => {
  return listCargosSalariosController.handle(request, response);
});

// cargosSalariosRoutes.post("/", (request, response) => {
//   return createModeloCargoSalarioController.handle(request, response);
// });

export { cargosSalariosRoutes };