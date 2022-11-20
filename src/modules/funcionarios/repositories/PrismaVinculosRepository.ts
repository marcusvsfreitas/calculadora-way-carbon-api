import { PrismaClient } from '@prisma/client';
import { Vinculo } from '../model/Vinculo';
import { ICreateVinculoDTO, IVinculosRepository } from './IVinculosRepository';

const prisma = new PrismaClient();

class PrismaVinculosRepository implements IVinculosRepository {
  private static INSTANCE: PrismaVinculosRepository;

  public static getInstance(): PrismaVinculosRepository {
    if(!PrismaVinculosRepository.INSTANCE){
      PrismaVinculosRepository.INSTANCE = new PrismaVinculosRepository();
    }

    return PrismaVinculosRepository.INSTANCE;
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

export { PrismaVinculosRepository };