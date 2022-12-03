import { CargoSalario } from "../model/CargoSalario";

interface ICreateCargosSalariosDTO {
  nome: string;
  tabela_salarial: string;
  step: string;
  salario: number;
  vinculos_id: number;
  target_pai: number;
  target_comissao: number;
  fgts: number;
}

interface ICargosSalariosRepository {
  create({ 
    nome, 
    tabela_salarial, 
    step,
    salario,
    vinculos_id,
    target_pai,
    target_comissao,
    fgts } : ICreateCargosSalariosDTO) : Promise<CargoSalario>;

  list() : Promise<Array<CargoSalario>>;
}

export { ICargosSalariosRepository, ICreateCargosSalariosDTO };