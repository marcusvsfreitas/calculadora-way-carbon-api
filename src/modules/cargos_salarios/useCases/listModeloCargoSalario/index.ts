import { PrismaModelosCargosSalariosRepository } from "../../repositories/PrismaModelosCargosSalariosRepository";
import { ListModeloCargoSalarioController } from "./ListModeloCargoSalarioController";
import { ListModeloCargoSalarioUseCase } from "./ListModeloCargoSalarioUseCase";

const modeloCargoSalarioRepository = PrismaModelosCargosSalariosRepository.getInstance();
const listModeloCargoSalarioUseCase = new ListModeloCargoSalarioUseCase(modeloCargoSalarioRepository);
const listModeloCargoSalarioController = new ListModeloCargoSalarioController(listModeloCargoSalarioUseCase);

export { listModeloCargoSalarioController };