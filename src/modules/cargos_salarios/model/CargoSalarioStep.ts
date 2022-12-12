import { CargoSalario } from "./CargoSalario";

class CargoSalarioStep {
  id: number;
  nome: string;
  salario: number;
  cargos_salarios_id: number;
  cargos_salarios?: CargoSalario
}

export { CargoSalarioStep };