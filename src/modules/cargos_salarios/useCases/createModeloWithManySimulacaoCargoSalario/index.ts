import { PrismaCargosSalariosRepository } from "../../repositories/PrismaCargosSalariosRepository";
import { PrismaModelosCargosSalariosRepository } from "../../repositories/PrismaModelosCargosSalariosRepository";
import { PrismaSimulacoesCargosSalariosRepository } from "../../repositories/PrismaSimulacoesCargosSalariosRepository";
import { PrismaSimulacoesCargosSalariosStepsRepository } from "../../repositories/PrismaSimulacoesCargosSalariosStepsRepository";

import { CreateModeloWithManySimulacaoCargoSalarioUseCase } from "./CreateModeloWithManySimulacaoCargoSalarioUseCase";
import { CreateModeloWithManySimulacaoCargoSalarioController } from "./CreateModeloWithManySimulacaoCargoSalarioController";
import { PrismaCargosSalariosStepsRepository } from "../../repositories/PrismaCargosSalariosStepsRepository";

const cargosSalariosRepository = PrismaCargosSalariosRepository.getInstance();
const cargosSalariosStepsRepository = PrismaCargosSalariosStepsRepository.getInstance();
const modelosCargosSalariosRepository = PrismaModelosCargosSalariosRepository.getInstance();
const simulacoesCargosSalariosRepository = PrismaSimulacoesCargosSalariosRepository.getInstance();
const simulacoesSalariosStepsRepository = PrismaSimulacoesCargosSalariosStepsRepository.getInstance();

const createModeloWithManySimulacaoCargoSalarioUseCase = new CreateModeloWithManySimulacaoCargoSalarioUseCase(cargosSalariosRepository, cargosSalariosStepsRepository, modelosCargosSalariosRepository, simulacoesCargosSalariosRepository, simulacoesSalariosStepsRepository);

const createModeloWithManySimulacaoCargoSalarioController = new CreateModeloWithManySimulacaoCargoSalarioController(createModeloWithManySimulacaoCargoSalarioUseCase);

export { createModeloWithManySimulacaoCargoSalarioController };