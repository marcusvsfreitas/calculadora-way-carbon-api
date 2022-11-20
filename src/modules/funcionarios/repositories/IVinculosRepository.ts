import { Vinculo } from "../model/Vinculo";

interface ICreateVinculoDTO {
  nome: string;
}

interface IVinculosRepository {
  list(): Promise<Vinculo[]>;
  create({ 
    nome
  } : ICreateVinculoDTO) : Promise<Vinculo>;
  findByID(id: number): Promise<Vinculo>;
}

export { IVinculosRepository, ICreateVinculoDTO };