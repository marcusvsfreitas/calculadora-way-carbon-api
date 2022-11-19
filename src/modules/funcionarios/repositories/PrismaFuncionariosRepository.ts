import { Funcionario } from "../model/Funcionario";
import { ICreateFuncionarioDTO, IFuncionariosRepository } from "./IFuncionariosRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


class PrismaFuncionariosRepository implements IFuncionariosRepository {
  private static INSTANCE: PrismaFuncionariosRepository;

  public static getInstance(): PrismaFuncionariosRepository {
    if(!PrismaFuncionariosRepository.INSTANCE){
      PrismaFuncionariosRepository.INSTANCE = new PrismaFuncionariosRepository();
    }

    return PrismaFuncionariosRepository.INSTANCE;
  }



  async create({ matriz, nome, vinculos_id, cargos_id, salario, premio, localidade, data_nascimento, dependentes, tipo_contrato_id, data_admissao, grupo_ocupacional_id, equipe_id, cargo_enquadramento_id }: ICreateFuncionarioDTO): Promise<void> {

    const result = await prisma.funcionarios.create({ data: {matriz, nome, vinculos_id, cargos_id, salario, premio, localidade, data_nascimento, dependentes, tipo_contrato_id, data_admissao, grupo_ocupacional_id, equipe_id, cargo_enquadramento_id }});

    console.log(result);
  }

  list(): Funcionario[] {
    throw new Error("Method not implemented.");
  }
 


}

export { PrismaFuncionariosRepository };