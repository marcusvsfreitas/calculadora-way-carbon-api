import { CargoSalario } from "../model/CargoSalario";
import { PrismaClient } from "@prisma/client";
import { ICargosSalariosRepository, ICreateCargosSalariosDTO } from "./ICargosSalariosRepository";

const prisma = new PrismaClient();

class PrismaCargosSalariosRepository implements ICargosSalariosRepository {
  private static INSTANCE: PrismaCargosSalariosRepository;

  public static getInstance(): PrismaCargosSalariosRepository {
    if(!PrismaCargosSalariosRepository.INSTANCE){
      PrismaCargosSalariosRepository.INSTANCE = new PrismaCargosSalariosRepository();
    }

    return PrismaCargosSalariosRepository.INSTANCE;
  }

  async create({ 
    nome, 
    tabela_salarial, 
    step,
    salario,
    vinculos_id,
    target_pai,
    target_comissao,
    fgts }: ICreateCargosSalariosDTO): Promise<CargoSalario> {

    const cargoSalario = await prisma.cargos_salarios.create({ data: { 
      nome, 
      tabela_salarial, 
      step,
      salario,
      vinculos_id,
      target_pai,
      target_comissao,
      fgts }}
    );

    return cargoSalario;
  }

  async list(): Promise<CargoSalario[]> {
    const cargosSalarios = await prisma.cargos_salarios.findMany();

    return cargosSalarios;  
  }
}

export { PrismaCargosSalariosRepository };