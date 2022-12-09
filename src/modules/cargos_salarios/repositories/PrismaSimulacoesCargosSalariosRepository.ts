import { SimulacaoCargoSalario } from "../model/SimulacaoCargoSalario";
import { PrismaClient } from "@prisma/client";
import { ISimulacoesCargosSalariosRepository, ICreateSimulacoesCargosSalariosDTO } from "./ISimulacoesCargosSalariosRepository";

const prisma = new PrismaClient();

class PrismaSimulacoesCargosSalariosRepository implements ISimulacoesCargosSalariosRepository {
  private static INSTANCE: PrismaSimulacoesCargosSalariosRepository;

  public static getInstance(): PrismaSimulacoesCargosSalariosRepository {
    if(!PrismaSimulacoesCargosSalariosRepository.INSTANCE){
      PrismaSimulacoesCargosSalariosRepository.INSTANCE = new PrismaSimulacoesCargosSalariosRepository();
    }

    return PrismaSimulacoesCargosSalariosRepository.INSTANCE;
  }

  async create({ 
    modelos_cargos_salarios_id, 
    nome, 
    tabela_salarial, 
    step,
    salario,
    vinculos_id,
    target_pai,
    target_comissao,
    percentuais,
    fgts }: ICreateSimulacoesCargosSalariosDTO): Promise<SimulacaoCargoSalario> {

    const modeloCargoSalario = await prisma.simulacoes_cargos_salarios.create({ data: { 
      modelos_cargos_salarios_id, 
      nome, 
      tabela_salarial, 
      step,
      salario,
      vinculos_id,
      target_pai,
      target_comissao,
      percentuais,
      fgts }}
    );

    return modeloCargoSalario;
  }

  async createMany(simulacoesCargosSalarios: Array<ICreateSimulacoesCargosSalariosDTO>): Promise<void> {
    const modelosCargosSalarios = await prisma.simulacoes_cargos_salarios.createMany({
      data: simulacoesCargosSalarios
    });
  }

  async list(modelos_cargos_salarios_id: number): Promise<SimulacaoCargoSalario[]> {
    const modelosCargosSalarios = await prisma.simulacoes_cargos_salarios.findMany({
      where: {
        modelos_cargos_salarios_id
      },
      orderBy: [
        {
         nome: 'asc' 
        }
      ]
    });

    const auxNomesModelosCargosSalariosAgrupados = [];
    const modelosCargosSalariosAgrupados = [];

    modelosCargosSalarios.forEach((modelo) => {
      if(auxNomesModelosCargosSalariosAgrupados.includes(modelo.nome)) {
        const refAgrupamento = modelosCargosSalariosAgrupados.find(agrupamento => agrupamento.nome == modelo.nome);

        refAgrupamento[`step${modelo.step}`] = modelo.salario;
      } else {
        const modeloTratado = {
          ...modelo,
          id: undefined,
          step: undefined,
          salario: undefined
        }
        modeloTratado[`step${modelo.step}`] = modelo.salario;

        modelosCargosSalariosAgrupados.push(modeloTratado);
        auxNomesModelosCargosSalariosAgrupados.push(modelo.nome);
      }
    });


    return modelosCargosSalariosAgrupados;  
  }
}

export { PrismaSimulacoesCargosSalariosRepository };