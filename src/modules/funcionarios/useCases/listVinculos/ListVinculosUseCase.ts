import { IVinculosRepository } from "../../repositories/IVinculosRepository";

class ListVinculosUseCase {
  constructor(private vinculosRepository: IVinculosRepository) {}

  async execute(){
    const vinculos = await this.vinculosRepository.list();

    return vinculos;
  }
}

export { ListVinculosUseCase };