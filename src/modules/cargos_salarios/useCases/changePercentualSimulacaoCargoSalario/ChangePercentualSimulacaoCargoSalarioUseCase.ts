import { ISimulacoesCargosSalariosRepository } from "../../repositories/ISimulacoesCargosSalariosRepository";

class ChangePercentualSimulacaoCargoSalarioUseCase {
  constructor(private simulacoesCargosSalariosRepository: ISimulacoesCargosSalariosRepository){ }

  async execute(simulacoes_cargos_salarios_id: number, percentuais: string){
    const cargoSalario = await this.simulacoesCargosSalariosRepository.changePercentual(simulacoes_cargos_salarios_id, percentuais);

    return cargoSalario;
  }
}

export { ChangePercentualSimulacaoCargoSalarioUseCase };