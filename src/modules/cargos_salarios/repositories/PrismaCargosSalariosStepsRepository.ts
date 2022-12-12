import { CargoSalarioStep } from "../model/CargoSalarioStep";
import { PrismaClient } from "@prisma/client";
import { ICargosSalariosStepsRepository, ICreateCargosSalariosStepsDTO } from "./ICargosSalariosStepsRepository";

const prisma = new PrismaClient();

class PrismaCargosSalariosStepsRepository implements ICargosSalariosStepsRepository {
  private static INSTANCE: PrismaCargosSalariosStepsRepository;

  public static getInstance(): PrismaCargosSalariosStepsRepository {
    if(!PrismaCargosSalariosStepsRepository.INSTANCE){
      PrismaCargosSalariosStepsRepository.INSTANCE = new PrismaCargosSalariosStepsRepository();
    }

    return PrismaCargosSalariosStepsRepository.INSTANCE;
  }

  async create({ 
    nome, 
    salario,
    cargos_salarios_id
  }: ICreateCargosSalariosStepsDTO): Promise<CargoSalarioStep> {

    const cargoSalarioStep = await prisma.cargos_salarios_steps.create({ data: { 
      nome, 
      salario,
      cargos_salarios_id
    }});

    return cargoSalarioStep;
  }

  async createMany(simulacoesCargosSalarios: Array<ICreateCargosSalariosStepsDTO>): Promise<void> {
    const modelosCargosSalarios = await prisma.cargos_salarios_steps.createMany({
      data: simulacoesCargosSalarios
    });
  }

  async list(): Promise<CargoSalarioStep[]> {
    const cargosSalarios = await prisma.cargos_salarios_steps.findMany({
      include: {
        cargos_salarios: true
      },
    });

    return cargosSalarios;  
  }
}

export { PrismaCargosSalariosStepsRepository };