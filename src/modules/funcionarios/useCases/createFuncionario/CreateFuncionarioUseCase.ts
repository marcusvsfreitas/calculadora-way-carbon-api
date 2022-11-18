import { IFuncionariosRepository } from "../../repositories/IFuncionariosRepository";

interface IRequest {
  matriz: number;
  nome: string;
  vinculos_id: number;
  cargos_id: number;
  salario: number;
  premio: number;
  localidade: string;
  data_nascimento: Date;
  dependentes: number;
  tipo_contrato_id: number;
  data_admissao: Date;
  grupo_ocupacional_id: number;
  equipe_id: number;
  cargo_enquadramento_id: number;
}

class CreateFuncionarioUseCase {
  constructor(private funcionariosRepository: IFuncionariosRepository) {}

  execute({
    matriz,
    nome,
    vinculos_id,
    cargos_id,
    salario,
    premio,
    localidade,
    data_nascimento,
    dependentes,
    tipo_contrato_id,
    data_admissao,
    grupo_ocupacional_id,
    equipe_id,
    cargo_enquadramento_id
  } : IRequest){

    this.funcionariosRepository.create({
      matriz,
      nome,
      vinculos_id,
      cargos_id,
      salario,
      premio,
      localidade,
      data_nascimento: new Date(data_nascimento),
      dependentes,
      tipo_contrato_id,
      data_admissao: new Date(data_admissao),
      grupo_ocupacional_id,
      equipe_id,
      cargo_enquadramento_id
    });
  }
}

export { CreateFuncionarioUseCase };