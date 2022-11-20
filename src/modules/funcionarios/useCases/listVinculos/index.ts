import { PrismaVinculosRepository } from "../../repositories/PrismaVinculosRepository";
import { ListVinculosController } from "./ListVinculosController";
import { ListVinculosUseCase } from "./ListVinculosUseCase";

const vinculosRepository = PrismaVinculosRepository.getInstance();
const listVinculosUseCase = new ListVinculosUseCase(vinculosRepository);
const listVinculosController = new ListVinculosController(listVinculosUseCase);

export { listVinculosController };
