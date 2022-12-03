import { ISimulacoesCargosSalariosRepository } from "../../repositories/ISimulacoesCargosSalariosRepository";

class ListSimulacoesCargosSalariosUseCase {
  constructor(private simulacoesCargosSalariosRepository: ISimulacoesCargosSalariosRepository){ }

  async execute(modelos_cargos_salarios_id: number){
    const simulacoesCargosSalarios = await this.simulacoesCargosSalariosRepository.list(modelos_cargos_salarios_id);

    return simulacoesCargosSalarios;
  }
}

export { ListSimulacoesCargosSalariosUseCase };