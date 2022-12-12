import { SimulacaoCargoSalario } from "../model/SimulacaoCargoSalario";

interface ICreateSimulacoesCargosSalariosDTO {
  modelos_cargos_salarios_id: number;
  nome: string;
  tabela_salarial: string;
  vinculos_id: number;
  target_pai: number;
  target_comissao: number;
  percentuais: string;
  fgts: number;
}

interface ISimulacoesCargosSalariosRepository {
  create({ 
    modelos_cargos_salarios_id, 
    nome, 
    tabela_salarial, 
    vinculos_id,
    target_pai,
    target_comissao,
    percentuais,
    fgts 
  } : ICreateSimulacoesCargosSalariosDTO) : Promise<SimulacaoCargoSalario>;
  
  createMany(simulacoesCargosSalarios: Array<ICreateSimulacoesCargosSalariosDTO>) : Promise<void>;
  
  list(modelos_cargos_salarios_id: number) : Promise<Array<SimulacaoCargoSalario>>;
}

export { ISimulacoesCargosSalariosRepository, ICreateSimulacoesCargosSalariosDTO};