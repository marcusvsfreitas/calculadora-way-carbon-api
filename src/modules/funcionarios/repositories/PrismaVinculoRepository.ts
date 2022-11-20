import { PrismaClient } from '@prisma/client';
import { Vinculo } from '../model/Vinculo';
import { ICreateVinculoDTO, IVinculosRepository } from './IVinculosRepository';

const prisma = new PrismaClient();

class PrismaVinculoRepository implements IVinculosRepository {
  private static INSTANCE: PrismaVinculoRepository;

  public static getInstance(): PrismaVinculoRepository {
    if(!PrismaVinculoRepository.INSTANCE){
      PrismaVinculoRepository.INSTANCE = new PrismaVinculoRepository();
    }

    return PrismaVinculoRepository.INSTANCE;
  }


  async list(): Promise<Vinculo[]> {
    const vinculos = await prisma.vinculos.findMany();

    return vinculos;
  }

  async create({ nome }: ICreateVinculoDTO): Promise<Vinculo> {
    const vinculo = await prisma.vinculos.create({
      data: {
        nome
      }
    });

    return vinculo;
  }

  async findByID(id: number): Promise<Vinculo> {
    throw new Error('Method not implemented.');
  }
}

export { PrismaVinculoRepository };