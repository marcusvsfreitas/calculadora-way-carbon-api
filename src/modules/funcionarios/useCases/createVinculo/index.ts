import { PrismaVinculosRepository } from "../../repositories/PrismaVinculosRepository";
import { CreateVinculoController } from "./CreateVinculoController";
import { CreateVinculoUseCase } from "./CreateVinculoUseCase";

const vinculosRepository = PrismaVinculosRepository.getInstance();
const createVinculoUseCase = new CreateVinculoUseCase(vinculosRepository);
const createVinculoController = new CreateVinculoController(createVinculoUseCase);

export { createVinculoController };