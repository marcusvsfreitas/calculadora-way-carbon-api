import { Request, Response } from 'express';
import { ListSimulacoesCargosSalariosUseCase } from "./ListSimulacoesCargosSalariosUseCase";

class ListSimulacoesCargosSalariosController {
  constructor(private listSimulacoesCargosSalariosUseCase: ListSimulacoesCargosSalariosUseCase){}

  async handle(request: Request, response: Response){
    const id = Number(request.params.id);

    const simulacoesCargosSalarios = await this.listSimulacoesCargosSalariosUseCase.execute(id);

    return response.json(simulacoesCargosSalarios);
  }
}

export { ListSimulacoesCargosSalariosController };