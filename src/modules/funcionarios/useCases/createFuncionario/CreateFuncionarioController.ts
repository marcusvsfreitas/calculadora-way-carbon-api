import { Request, Response } from 'express';
import { CreateFuncionarioUseCase } from './CreateFuncionarioUseCase';

class CreateFuncionarioController {
  constructor(private createFuncionarioUseCase: CreateFuncionarioUseCase) {}

  async handle(request: Request, response: Response){
    const {
      matriz,
      nome,
      vinculos_id,
      cargos_id,
      salario,
      premio,
      localidade,
      data_nascimento,
      dependentes,
      tipo_contrato_id,
      data_admissao,
      grupo_ocupacional_id,
      equipe_id,
      cargo_enquadramento_id
    } = request.body;

  
    const funcionario = await this.createFuncionarioUseCase.execute({
      matriz,
      nome,
      vinculos_id,
      cargos_id,
      salario,
      premio,
      localidade,
      data_nascimento,
      dependentes,
      tipo_contrato_id,
      data_admissao,
      grupo_ocupacional_id,
      equipe_id,
      cargo_enquadramento_id
    });
  
    return response.status(201).json(funcionario);
  }
}

export { CreateFuncionarioController }