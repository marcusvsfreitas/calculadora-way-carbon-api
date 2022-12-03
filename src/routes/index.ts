import { Router } from 'express';
import { cargosSalariosRoutes } from './cargos-salarios.routes';
import { funcionariosRoutes } from './funcionarios.routes';
import { modelosCargosSalariosRoutes } from './modelos-cargos-salarios.routes';
import { simulacoesCargosSalariosRoutes } from './simulacoes-cargos-salarios.routes';
import { vinculosRoutes } from './vinculos.routes';

const router = Router();

router.get("/ping", (request, response) => {
  return response.json("Olá mundo")
});

router.use("/funcionarios", funcionariosRoutes);
router.use("/vinculos", vinculosRoutes);
router.use("/modelos-cargos-salarios", modelosCargosSalariosRoutes);
router.use("/cargos-salarios", cargosSalariosRoutes);
router.use("/simulacoes-cargos-salarios", simulacoesCargosSalariosRoutes);

export { router };