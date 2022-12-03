import { PrismaCargosSalariosRepository } from "../../repositories/PrismaCargosSalariosRepository";
import { PrismaModelosCargosSalariosRepository } from "../../repositories/PrismaModelosCargosSalariosRepository";
import { PrismaSimulacoesCargosSalariosRepository } from "../../repositories/PrismaSimulacoesCargosSalariosRepository";

import { CreateModeloWithManySimulacaoCargoSalarioUseCase } from "./CreateModeloWithManySimulacaoCargoSalarioUseCase";
import { CreateModeloWithManySimulacaoCargoSalarioController } from "./CreateModeloWithManySimulacaoCargoSalarioController";

const cargosSalariosRepository = PrismaCargosSalariosRepository.getInstance();
const modelosCargosSalariosRepository = PrismaModelosCargosSalariosRepository.getInstance();
const simulacoesSalariosRepository = PrismaSimulacoesCargosSalariosRepository.getInstance();

const createModeloWithManySimulacaoCargoSalarioUseCase = new CreateModeloWithManySimulacaoCargoSalarioUseCase(cargosSalariosRepository, modelosCargosSalariosRepository, simulacoesSalariosRepository);

const createModeloWithManySimulacaoCargoSalarioController = new CreateModeloWithManySimulacaoCargoSalarioController(createModeloWithManySimulacaoCargoSalarioUseCase);

export { createModeloWithManySimulacaoCargoSalarioController };