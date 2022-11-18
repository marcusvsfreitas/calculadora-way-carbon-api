import { PrismaFuncionariosRepository } from "../../repositories/PrismaFuncionariosRepository";
import { CreateFuncionarioController } from "./CreateFuncionarioController";
import { CreateFuncionarioUseCase } from "./CreateFuncionarioUseCase";

const funcionariosRepository = new PrismaFuncionariosRepository();
const createFuncionarioUseCase = new CreateFuncionarioUseCase(funcionariosRepository);
const createFuncionarioController = new CreateFuncionarioController(createFuncionarioUseCase);

export { createFuncionarioController };