import { ModeloCargoSalario } from "../model/ModeloCargoSalario";
import { ICreateModeloCargoSalarioDTO, IModelosCargosSalariosRepository } from "./IModelosCargosSalariosRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PrismaModelosCargosSalariosRepository implements IModelosCargosSalariosRepository {
  private static INSTANCE: PrismaModelosCargosSalariosRepository;

  public static getInstance(): PrismaModelosCargosSalariosRepository {
    if(!PrismaModelosCargosSalariosRepository.INSTANCE){
      PrismaModelosCargosSalariosRepository.INSTANCE = new PrismaModelosCargosSalariosRepository();
    }

    return PrismaModelosCargosSalariosRepository.INSTANCE;
  }

  async create({ nome, ano, mes }: ICreateModeloCargoSalarioDTO): Promise<ModeloCargoSalario> {
    const modeloCargoSalario = await prisma.modelos_cargos_salarios.create({ data: {
      nome,
      ano, 
      mes
    }});

    return modeloCargoSalario;
  }

  async list(): Promise<ModeloCargoSalario[]> {
    const modelosCargosSalarios = await prisma.modelos_cargos_salarios.findMany();

    return modelosCargosSalarios;  
  }

  async findByID(id: number): Promise<ModeloCargoSalario> {
    console.log("findByID ", id);
    const modeloCargoSalario = await prisma.modelos_cargos_salarios.findUnique({
      where: {
        id
      },
    });

    return modeloCargoSalario;
  }
}

export { PrismaModelosCargosSalariosRepository };