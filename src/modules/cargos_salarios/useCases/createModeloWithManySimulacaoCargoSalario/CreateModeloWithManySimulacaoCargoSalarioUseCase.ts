import { ICargosSalariosRepository } from "../../repositories/ICargosSalariosRepository";
import { ICargosSalariosStepsRepository } from "../../repositories/ICargosSalariosStepsRepository";
import { IModelosCargosSalariosRepository } from "../../repositories/IModelosCargosSalariosRepository";
import { ISimulacoesCargosSalariosRepository } from "../../repositories/ISimulacoesCargosSalariosRepository";
import { ISimulacoesCargosSalariosStepsRepository } from "../../repositories/ISimulacoesCargosSalariosStepsRepository";

interface IRequest {
  nome: string;
  ano: number;
  mes: number;
}

class CreateModeloWithManySimulacaoCargoSalarioUseCase {
  constructor(private cargosSalariosRepository: ICargosSalariosRepository, private cargosSalariosStepsRepository: ICargosSalariosStepsRepository, private modeloCargosSalariosRepository: IModelosCargosSalariosRepository, private simulacaoCargosSalariosRepository: ISimulacoesCargosSalariosRepository, private simulacaoCargoSalarioStepRepository: ISimulacoesCargosSalariosStepsRepository){}

  async execute({ nome, ano, mes } : IRequest){
    const cargosSalarios = await this.cargosSalariosRepository.list();
    const cargosSalariosSteps = await this.cargosSalariosStepsRepository.list();
    const modeloCargoSalario = await this.modeloCargosSalariosRepository.create({ nome, ano, mes });



    const simulacaoCargoSalarioCreate = cargosSalarios.map(cargoSalario => {
      return {
        ...cargoSalario,
        id: undefined,
        modelos_cargos_salarios_id: modeloCargoSalario.id,
        percentuais: ""
      } 
    });

    await this.simulacaoCargosSalariosRepository.createMany(simulacaoCargoSalarioCreate);
    const simulacoesCargosSalarios = await this.simulacaoCargosSalariosRepository.list(modeloCargoSalario.id);

    const simulacaoCargoSalarioStepCreate = cargosSalariosSteps.map(cargoSalarioStep => {
      const simulacoes_cargos_salarios_id = simulacoesCargosSalarios.find(simulacao => simulacao.nome == cargoSalarioStep.cargos_salarios.nome && (simulacao.tabela_salarial == cargoSalarioStep.cargos_salarios.tabela_salarial)).id;

      return {
        ...cargoSalarioStep,
        simulacoes_cargos_salarios_id,
        cargos_salarios_id: undefined,
        cargos_salarios: undefined
      }
    });
    
    await this.simulacaoCargoSalarioStepRepository.createMany(simulacaoCargoSalarioStepCreate);
  }
}

export { CreateModeloWithManySimulacaoCargoSalarioUseCase };