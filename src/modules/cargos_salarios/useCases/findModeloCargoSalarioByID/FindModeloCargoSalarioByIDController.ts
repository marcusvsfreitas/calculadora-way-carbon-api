import { Request, Response } from 'express';
import { FindModeloCargoSalarioByIDUseCase } from './FindModeloCargoSalarioByIDUseCase';


class FindModeloCargoSalarioByIDController {
  constructor(private findModeloCargoSalarioByIDUseCase: FindModeloCargoSalarioByIDUseCase){}

  async handle(request: Request, response: Response){
    const id = Number(request.params.id);
  
    const modeloCargoSalario = await this.findModeloCargoSalarioByIDUseCase.execute(id);

    return response.json(modeloCargoSalario);
  }
}

export { FindModeloCargoSalarioByIDController };