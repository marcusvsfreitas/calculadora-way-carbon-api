import { SimulacaoCargoSalarioStep } from "../model/SimulacaoCargoSalarioStep";

interface ICreateSimulacoesCargosSalariosStepsDTO {
  nome: string;
  salario: number;
  simulacoes_cargos_salarios_id: number;
}

interface ISimulacoesCargosSalariosStepsRepository {
  create({ 
    nome, 
    salario,
    simulacoes_cargos_salarios_id
  } : ICreateSimulacoesCargosSalariosStepsDTO) : Promise<SimulacaoCargoSalarioStep>;

  createMany(cargosSalarios: Array<ICreateSimulacoesCargosSalariosStepsDTO>) : Promise<void>;

  list() : Promise<Array<SimulacaoCargoSalarioStep>>;
}

export { ISimulacoesCargosSalariosStepsRepository, ICreateSimulacoesCargosSalariosStepsDTO };