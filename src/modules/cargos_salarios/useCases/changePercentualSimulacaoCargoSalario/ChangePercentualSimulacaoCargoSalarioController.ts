import { Request, Response } from 'express';
import { ChangePercentualSimulacaoCargoSalarioUseCase } from './ChangePercentualSimulacaoCargoSalarioUseCase';


class ChangePercentualSimulacaoCargoSalarioController {
  constructor(private changePercentualSimulacaoCargoSalarioUseCase: ChangePercentualSimulacaoCargoSalarioUseCase){}

  async handle(request: Request, response: Response){
    const id = Number(request.params.id);
    const { percentuais } = request.body;
  
    const modeloCargoSalario = await this.changePercentualSimulacaoCargoSalarioUseCase.execute(id, percentuais);

    return response.json(modeloCargoSalario);
  }
}

export { ChangePercentualSimulacaoCargoSalarioController };