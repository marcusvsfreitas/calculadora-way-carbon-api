import { PrismaModelosCargosSalariosRepository } from "../../repositories/PrismaModelosCargosSalariosRepository";
import { FindModeloCargoSalarioByIDController } from "./FindModeloCargoSalarioByIDController";
import { FindModeloCargoSalarioByIDUseCase } from "./FindModeloCargoSalarioByIDUseCase";

const modeloCargoSalarioRepository = PrismaModelosCargosSalariosRepository.getInstance();

const findModeloCargoSalarioByIDUseCase = new FindModeloCargoSalarioByIDUseCase(modeloCargoSalarioRepository);
const findModeloCargoSalarioByIDController = new FindModeloCargoSalarioByIDController(findModeloCargoSalarioByIDUseCase);

export { findModeloCargoSalarioByIDController };