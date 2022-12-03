import { PrismaModelosCargosSalariosRepository } from "../../repositories/PrismaModelosCargosSalariosRepository";
import { CreateModeloCargoSalarioController } from "./CreateModeloCargoSalarioController";
import { CreateModeloCargoSalarioUseCase } from "./CreateModeloCargoSalarioUseCase";

const modeloCargoSalarioRepository = PrismaModelosCargosSalariosRepository.getInstance();
const createModeloCargoSalarioUseCase = new CreateModeloCargoSalarioUseCase(modeloCargoSalarioRepository);
const createModeloCargoSalarioController = new CreateModeloCargoSalarioController(createModeloCargoSalarioUseCase);

export { createModeloCargoSalarioController };