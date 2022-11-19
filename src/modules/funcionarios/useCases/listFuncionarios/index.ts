import { PrismaFuncionariosRepository } from "../../repositories/PrismaFuncionariosRepository";
import { ListFuncionariosController } from "./ListFuncionariosController";

import { ListFuncionariosUseCase } from "./ListFuncionariosUseCase";

const funcionarioRepository = PrismaFuncionariosRepository.getInstance();
const listFuncionariosUseCase = new ListFuncionariosUseCase(funcionarioRepository);
const listFuncionariosController = new ListFuncionariosController(listFuncionariosUseCase);

export { listFuncionariosController };