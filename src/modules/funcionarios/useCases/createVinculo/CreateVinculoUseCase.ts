import { IVinculosRepository } from "../../repositories/IVinculosRepository";

interface IRequest {
  nome: string;
}

class CreateVinculoUseCase {
  constructor(private vinculosRepository: IVinculosRepository) {}

  async execute({
    nome
  } : IRequest){

    const vinculo = await this.vinculosRepository.create({
      nome
    });

    return vinculo;
  }
}

export { CreateVinculoUseCase };