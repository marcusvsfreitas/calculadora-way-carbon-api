import { PrismaSimulacoesCargosSalariosRepository } from "../../repositories/PrismaSimulacoesCargosSalariosRepository";
import { ChangePercentualSimulacaoCargoSalarioController } from "./ChangePercentualSimulacaoCargoSalarioController";
import { ChangePercentualSimulacaoCargoSalarioUseCase } from "./ChangePercentualSimulacaoCargoSalarioUseCase";

const modeloCargoSalarioRepository = PrismaSimulacoesCargosSalariosRepository.getInstance();

const changePercentualSimulacaoCargoSalarioUseCase = new ChangePercentualSimulacaoCargoSalarioUseCase(modeloCargoSalarioRepository);
const changePercentualSimulacaoCargoSalarioController = new ChangePercentualSimulacaoCargoSalarioController(changePercentualSimulacaoCargoSalarioUseCase);

export { changePercentualSimulacaoCargoSalarioController };