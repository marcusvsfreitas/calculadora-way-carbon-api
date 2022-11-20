import { IFuncionariosRepository } from "../../repositories/IFuncionariosRepository";

class FindByIDFuncionarioUseCase {
  constructor(private funcionarioRepository: IFuncionariosRepository) {}

  async execute(userID: number){
    const funcionario = await this.funcionarioRepository.findByID(userID);

    return funcionario;
  }
}

export { FindByIDFuncionarioUseCase }