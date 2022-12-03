import { Request, Response } from 'express';
import { ListModeloCargoSalarioUseCase } from "./ListModeloCargoSalarioUseCase";

class ListModeloCargoSalarioController {
  constructor(private listModeloCargoSalarioUseCase: ListModeloCargoSalarioUseCase){}

  async handle(request: Request, response: Response){
    const modeloCargoSalario = await this.listModeloCargoSalarioUseCase.execute();

    return response.json(modeloCargoSalario);
  }
}

export { ListModeloCargoSalarioController };