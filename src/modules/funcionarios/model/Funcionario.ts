class Funcionario {
  id: number
  matriz: number
  nome: string
  vinculos_id: number
  cargos_id: number
  salario: number
  premio: number
  localidade: string
  data_nascimento: Date
  dependentes: number
  tipo_contrato_id: number
  data_admissao: Date
  grupo_ocupacional_id: number
  equipe_id: number
  cargo_enquadramento_id: number

  constructor() {
    
  };
}

export { Funcionario };