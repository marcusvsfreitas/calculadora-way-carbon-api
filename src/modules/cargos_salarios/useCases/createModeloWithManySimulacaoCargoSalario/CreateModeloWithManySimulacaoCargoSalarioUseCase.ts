import { ICargosSalariosRepository } from "../../repositories/ICargosSalariosRepository";
import { IModelosCargosSalariosRepository } from "../../repositories/IModelosCargosSalariosRepository";
import { ISimulacoesCargosSalariosRepository } from "../../repositories/ISimulacoesCargosSalariosRepository";

interface IRequest {
  nome: string;
  ano: number;
  mes: number;
}

class CreateModeloWithManySimulacaoCargoSalarioUseCase {
  constructor(private cargoSalarioRepository: ICargosSalariosRepository, private modeloCargoSalarioRepository: IModelosCargosSalariosRepository, private simulacaoCargoSalarioRepository: ISimulacoesCargosSalariosRepository,){}

  async execute({ nome, ano, mes } : IRequest){
    const cargosSalarios = await this.cargoSalarioRepository.list();
    const modeloCargoSalario = await this.modeloCargoSalarioRepository.create({ nome, ano, mes });
    const simulacaoCargoSalarioCreate = cargosSalarios.map(cargoSalario => {
      return {
        ...cargoSalario,
        id: undefined,
        modelos_cargos_salarios_id: modeloCargoSalario.id,
        percentuais: ""
      }
    });

    const simulacaoCargoSalario = await this.simulacaoCargoSalarioRepository.createMany(simulacaoCargoSalarioCreate);
  }
}

export { CreateModeloWithManySimulacaoCargoSalarioUseCase };