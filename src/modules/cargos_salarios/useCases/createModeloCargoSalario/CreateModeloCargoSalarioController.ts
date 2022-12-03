import { Request, Response } from 'express';
import { CreateModeloCargoSalarioUseCase } from "./CreateModeloCargoSalarioUseCase";

class CreateModeloCargoSalarioController {
  constructor(private createModeloCargoSalarioUseCase: CreateModeloCargoSalarioUseCase){}

  async handle(request: Request, response: Response){
    const { nome, ano, mes } = request.body;

    const modeloCargoSalario = await this.createModeloCargoSalarioUseCase.execute({ nome, ano, mes });

    return response.status(201).json(modeloCargoSalario);
  }
}

export { CreateModeloCargoSalarioController };