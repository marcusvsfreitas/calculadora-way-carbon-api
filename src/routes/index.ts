import { Router } from 'express';
import { funcionariosRoutes } from './funcionarios.routes';
import { modelosCargosSalariosRoutes } from './modelos-cargos-salarios.routes';
import { vinculosRoutes } from './vinculos.routes';

const router = Router();

router.get("/ping", (request, response) => {
  return response.json("Olá mundo")
});

router.use("/funcionarios", funcionariosRoutes);
router.use("/vinculos", vinculosRoutes);
router.use("/modelos-cargos-salarios", modelosCargosSalariosRoutes);

export { router };