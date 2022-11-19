import { Request, Response } from 'express';
import { ListFuncionariosUseCase } from "./ListFuncionariosUseCase";

class ListFuncionariosController {
  constructor(private listFuncionariosUseCase: ListFuncionariosUseCase){};

  async handle(request: Request, response: Response){
    const funcionarios = await this.listFuncionariosUseCase.execute();

    return response.json(funcionarios);
  }
}

export { ListFuncionariosController };