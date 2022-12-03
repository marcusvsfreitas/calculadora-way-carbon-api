class SimulacaoCargoSalario {
  id: number;
  modelos_cargos_salarios_id: number;
  nome: string;
  tabela_salarial: string;
  step: string;
  salario: number;
  vinculos_id: number;
  target_pai: number;
  target_comissao: number;
  percentuais: string;
  fgts: number;
}

export { SimulacaoCargoSalario };