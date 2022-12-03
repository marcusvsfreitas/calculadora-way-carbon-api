import { IModelosCargosSalariosRepository } from "../../repositories/IModelosCargosSalariosRepository";

class FindModeloCargoSalarioByIDUseCase {
  constructor(private modeloCargoSalarioRepository: IModelosCargosSalariosRepository){ }

  async execute(id: number){
    const modeloCargosSalario = await this.modeloCargoSalarioRepository.findByID(id);

    return modeloCargosSalario;
  }
}

export { FindModeloCargoSalarioByIDUseCase };