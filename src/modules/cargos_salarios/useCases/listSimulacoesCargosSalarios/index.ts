import { PrismaSimulacoesCargosSalariosRepository } from "../../repositories/PrismaSimulacoesCargosSalariosRepository";
import { ListSimulacoesCargosSalariosController } from "./ListSimulacoesCargosSalariosController";
import { ListSimulacoesCargosSalariosUseCase } from "./ListSimulacoesCargosSalariosUseCase";

const cargosSimulacoesSalariosRepository = PrismaSimulacoesCargosSalariosRepository.getInstance();
const listSimulacoesCargosSalariosUseCase = new ListSimulacoesCargosSalariosUseCase(cargosSimulacoesSalariosRepository);
const listSimulacoesCargosSalariosController = new ListSimulacoesCargosSalariosController(listSimulacoesCargosSalariosUseCase);

export { listSimulacoesCargosSalariosController };