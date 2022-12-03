import { IModelosCargosSalariosRepository } from "../../repositories/IModelosCargosSalariosRepository";


interface IRequest {
  nome: string;
  ano: number;
  mes: number;
}

class CreateModeloCargoSalarioUseCase {
  constructor(private modeloCargoSalarioRepository: IModelosCargosSalariosRepository){ }

  async execute({ nome, ano, mes } : IRequest){
    const modeloCargoSalario = await this.modeloCargoSalarioRepository.create({ nome, ano, mes });

    return modeloCargoSalario;
  }
}

export { CreateModeloCargoSalarioUseCase };