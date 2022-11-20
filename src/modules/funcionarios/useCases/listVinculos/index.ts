import { PrismaVinculoRepository } from "../../repositories/PrismaVinculoRepository";
import { ListVinculosController } from "./ListVinculosController";
import { ListVinculosUseCase } from "./ListVinculosUseCase";

const vinculosRepository = PrismaVinculoRepository.getInstance();
const listVinculosUseCase = new ListVinculosUseCase(vinculosRepository);
const listVinculosController = new ListVinculosController(listVinculosUseCase);

export { listVinculosController };
