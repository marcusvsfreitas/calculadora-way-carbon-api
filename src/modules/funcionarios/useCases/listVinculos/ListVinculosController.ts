import { Request, Response } from 'express';
import { ListVinculosUseCase } from "./ListVinculosUseCase";

class ListVinculosController {
  constructor(private listVinculosUseCase: ListVinculosUseCase){}

  async handle(request: Request, response: Response){
    const vinculos = await this.listVinculosUseCase.execute();

    return response.json(vinculos);
  }
}

export { ListVinculosController };