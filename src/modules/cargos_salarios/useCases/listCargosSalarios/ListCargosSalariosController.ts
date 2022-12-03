import { Request, Response } from 'express';
import { ListCargosSalariosUseCase } from "./ListCargosSalariosUseCase";

class ListCargosSalariosController {
  constructor(private listCargosSalariosUseCase: ListCargosSalariosUseCase){}

  async handle(request: Request, response: Response){
    const cargosSalarios = await this.listCargosSalariosUseCase.execute();

    return response.json(cargosSalarios);
  }
}

export { ListCargosSalariosController };