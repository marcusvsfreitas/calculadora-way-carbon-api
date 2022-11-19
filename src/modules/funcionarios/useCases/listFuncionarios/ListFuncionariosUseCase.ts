import { IFuncionariosRepository } from "../../repositories/IFuncionariosRepository";

class ListFuncionariosUseCase {
  constructor(private funcionarioRepository: IFuncionariosRepository) {}

  async execute() {
    const funcionarios = await this.funcionarioRepository.list();
    return funcionarios;
  }
}

export { ListFuncionariosUseCase };