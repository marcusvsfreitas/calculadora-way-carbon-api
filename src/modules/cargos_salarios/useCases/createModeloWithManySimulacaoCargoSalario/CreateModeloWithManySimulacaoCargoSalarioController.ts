import { Request, Response } from 'express';
import { CreateModeloWithManySimulacaoCargoSalarioUseCase } from "./CreateModeloWithManySimulacaoCargoSalarioUseCase";

class CreateModeloWithManySimulacaoCargoSalarioController {
  constructor(private createModeloWithManySimulacaoCargoSalarioUseCase: CreateModeloWithManySimulacaoCargoSalarioUseCase){}

  async handle(request: Request, response: Response){
    const { nome, ano, mes } = request.body;

    const modeloWithManySimulacaoCargoSalarioUseCase = await this.createModeloWithManySimulacaoCargoSalarioUseCase.execute({ nome, ano, mes });

    return response.status(201).send();
  }
}

export { CreateModeloWithManySimulacaoCargoSalarioController };