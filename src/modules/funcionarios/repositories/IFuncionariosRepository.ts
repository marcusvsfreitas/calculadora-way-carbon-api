import { Funcionario } from "../model/Funcionario";

interface ICreateFuncionarioDTO {
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

interface IFuncionariosRepository {
  list(): Promise<Funcionario[]>;
  create({ 
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
  } : ICreateFuncionarioDTO) : Promise<Funcionario>;
  findByID(id: number): Promise<Funcionario>;
}

export { IFuncionariosRepository, ICreateFuncionarioDTO };