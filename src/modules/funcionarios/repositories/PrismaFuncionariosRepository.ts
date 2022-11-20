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

  async create({ matriz, nome, vinculos_id, cargos_id, salario, premio, localidade, data_nascimento, dependentes, tipo_contrato_id, data_admissao, grupo_ocupacional_id, equipe_id, cargo_enquadramento_id }: ICreateFuncionarioDTO): Promise<Funcionario> {
    const funcionario = prisma.funcionarios.create({ data: {matriz, nome, vinculos_id, cargos_id, salario, premio, localidade, data_nascimento, dependentes, tipo_contrato_id, data_admissao, grupo_ocupacional_id, equipe_id, cargo_enquadramento_id }});

    return funcionario;
  }

  async list(): Promise<Funcionario[]> {
    let funcionarios = await prisma.funcionarios.findMany({
      include: {
        cargos: true,
        cargo_enquadramento: true,
        tipo_contrato: true,
        vinculos: true,
        equipes: true,
        grupo_ocupacional: true,
      },
      orderBy: [
        {
          nome: 'asc'
        }
      ]
    });

    funcionarios = funcionarios.map(funcionario => {
      return {
        ...funcionario,
        salarioTratado: funcionario.salario ? funcionario.salario / 100 : 0,
        premioTratado: funcionario.premio ? funcionario.premio / 100 : 0,
      }
    });

    return funcionarios;
  }

  async findByID(id: number): Promise<Funcionario>  {
    const funcionario = await prisma.funcionarios.findUnique({
      where: {
        id
      },
    })

    return funcionario;
  }
}

export { PrismaFuncionariosRepository };