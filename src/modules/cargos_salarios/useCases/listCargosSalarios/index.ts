import { PrismaCargosSalariosRepository } from "../../repositories/PrismaCargosSalariosRepository";
import { ListCargosSalariosController } from "./ListCargosSalariosController";
import { ListCargosSalariosUseCase } from "./ListCargosSalariosUseCase";

const cargosSalariosRepository = PrismaCargosSalariosRepository.getInstance();
const listCargosSalariosUseCase = new ListCargosSalariosUseCase(cargosSalariosRepository);
const listCargosSalariosController = new ListCargosSalariosController(listCargosSalariosUseCase);

export { listCargosSalariosController };