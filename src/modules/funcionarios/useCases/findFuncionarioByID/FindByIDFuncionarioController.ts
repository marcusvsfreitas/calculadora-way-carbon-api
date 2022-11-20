import { Request, Response } from 'express';
import { FindByIDFuncionarioUseCase } from "./FindByIDFuncionarioUseCase";

class FindByIDFuncionarioController {
  constructor(private findByIDFuncionarioUseCase: FindByIDFuncionarioUseCase){}

  async handle(request: Request, response: Response){
    const id = Number(request.params.id);

    const funcionario = await this.findByIDFuncionarioUseCase.execute(id);

    response.json(funcionario);
  }
}

export { FindByIDFuncionarioController };