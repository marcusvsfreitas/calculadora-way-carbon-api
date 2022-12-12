import { CargoSalarioStep } from "../model/CargoSalarioStep";

interface ICreateCargosSalariosStepsDTO {
  nome: string;
  salario: number;
  cargos_salarios_id: number;
}

interface ICargosSalariosStepsRepository {
  create({ 
    nome, 
    salario,
    cargos_salarios_id
  } : ICreateCargosSalariosStepsDTO) : Promise<CargoSalarioStep>;

  createMany(cargosSalarios: Array<ICreateCargosSalariosStepsDTO>) : Promise<void>;

  list() : Promise<Array<CargoSalarioStep>>;
}

export { ICargosSalariosStepsRepository, ICreateCargosSalariosStepsDTO };