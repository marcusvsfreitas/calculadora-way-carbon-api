import { SimulacaoCargoSalarioStep } from "../model/SimulacaoCargoSalarioStep";
import { PrismaClient } from "@prisma/client";
import { ISimulacoesCargosSalariosStepsRepository, ICreateSimulacoesCargosSalariosStepsDTO } from "./ISimulacoesCargosSalariosStepsRepository";

const prisma = new PrismaClient();

class PrismaSimulacoesCargosSalariosStepsRepository  implements ISimulacoesCargosSalariosStepsRepository {
  private static INSTANCE: PrismaSimulacoesCargosSalariosStepsRepository ;

  public static getInstance(): PrismaSimulacoesCargosSalariosStepsRepository  {
    if(!PrismaSimulacoesCargosSalariosStepsRepository .INSTANCE){
      PrismaSimulacoesCargosSalariosStepsRepository .INSTANCE = new PrismaSimulacoesCargosSalariosStepsRepository ();
    }

    return PrismaSimulacoesCargosSalariosStepsRepository .INSTANCE;
  }

  async create({ 
    nome, 
    salario,
    simulacoes_cargos_salarios_id
  }: ICreateSimulacoesCargosSalariosStepsDTO): Promise<SimulacaoCargoSalarioStep> {

    const simulacaoCargoSalarioStep = await prisma.simulacoes_cargos_salarios_steps.create({ data: { 
      nome, 
      salario,
      simulacoes_cargos_salarios_id
    }});

    return simulacaoCargoSalarioStep;
  }

  async createMany(simulacoesCargosSalariosSteps: Array<ICreateSimulacoesCargosSalariosStepsDTO>): Promise<void> {
    const modelosCargosSalarios = await prisma.simulacoes_cargos_salarios_steps.createMany({
      data: simulacoesCargosSalariosSteps
    });
  }

  async list(): Promise<SimulacaoCargoSalarioStep[]> {
    const simulacoesCargosSalariosSteps = await prisma.simulacoes_cargos_salarios_steps.findMany({
      include: {
        simulacoes_cargos_salarios: true
      },
    });

    return simulacoesCargosSalariosSteps;  
  }
}

export { PrismaSimulacoesCargosSalariosStepsRepository };