import { ModeloCargoSalario } from "../model/ModeloCargoSalario";

interface ICreateModeloCargoSalarioDTO {
  nome: string;
  ano: number;
  mes: number;
}

interface IModelosCargosSalariosRepository {
  create({ nome, ano, mes } : ICreateModeloCargoSalarioDTO) : Promise<ModeloCargoSalario>;
  list() : Promise<Array<ModeloCargoSalario>>;
}

export { IModelosCargosSalariosRepository, ICreateModeloCargoSalarioDTO };