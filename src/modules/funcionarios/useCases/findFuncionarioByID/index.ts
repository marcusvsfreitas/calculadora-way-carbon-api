import { PrismaFuncionariosRepository } from "../../repositories/PrismaFuncionariosRepository";
import { FindByIDFuncionarioController } from "./FindByIDFuncionarioController";
import { FindByIDFuncionarioUseCase } from "./FindByIDFuncionarioUseCase";


const funcionarioRepository = PrismaFuncionariosRepository.getInstance();
const findByIDFuncionarioUseCase = new FindByIDFuncionarioUseCase(funcionarioRepository);
const findByIDFuncionarioController = new FindByIDFuncionarioController(findByIDFuncionarioUseCase);

export { findByIDFuncionarioController };