import { ICargosSalariosRepository } from "../../repositories/ICargosSalariosRepository";

class ListCargosSalariosUseCase {
  constructor(private cargosSalariosRepository: ICargosSalariosRepository){ }

  async execute(){
    const cargosSalarios = await this.cargosSalariosRepository.list();

    return cargosSalarios;
  }
}

export { ListCargosSalariosUseCase };