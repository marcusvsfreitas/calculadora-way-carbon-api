import { IModelosCargosSalariosRepository } from "../../repositories/IModelosCargosSalariosRepository";

class ListModeloCargoSalarioUseCase {
  constructor(private modeloCargoSalarioRepository: IModelosCargosSalariosRepository){ }

  async execute(){
    const modelosCargosSalarios = await this.modeloCargoSalarioRepository.list();

    return modelosCargosSalarios;
  }
}

export { ListModeloCargoSalarioUseCase };