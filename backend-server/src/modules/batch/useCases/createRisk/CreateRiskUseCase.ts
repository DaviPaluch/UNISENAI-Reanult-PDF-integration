import { inject, injectable } from "tsyringe";
import { ICreateRisk } from "../../dtos/ICreateBatch";
import { IRiskRepository } from "../../infra/IRiskRepository";

interface ICreateRiskUseCaseProps {
  riskData: ICreateRisk
}

@injectable()
export class CreateRiskUseCase {
  constructor(@inject("RiskRepository")
  private riskRepository: IRiskRepository) { }

  async execute({ riskData }: ICreateRiskUseCaseProps): Promise<any> {
    const riskCreated = await this.riskRepository.create({ riskData });
    return riskCreated;
  }
}