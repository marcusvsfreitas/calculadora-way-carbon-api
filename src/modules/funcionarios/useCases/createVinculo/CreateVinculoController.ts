import { Request, Response } from 'express';
import { CreateVinculoUseCase } from './CreateVinculoUseCase';

class CreateVinculoController {
  constructor(private createVinculoUseCase: CreateVinculoUseCase) {}

  async handle(request: Request, response: Response){
    const {
      nome,
    } = request.body;

  
    const vinculo = await this.createVinculoUseCase.execute({
      nome,
    });
  
    return response.status(201).json(vinculo);
  }
}

export { CreateVinculoController }