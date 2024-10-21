import { inject, injectable } from "tsyringe";
import { ICreateResidualRisk } from "../../dtos/ICreateResidualRisk";
import { IResidualRiskRepository } from "@modules/ResidualRisk/infra/IResidualRiskRepository";

interface ICreateResidualRiskUseCaseProps {
  residualRiskData: ICreateResidualRisk
}

@injectable()
export class CreateResidualRiskRepositoryUseCase {
  constructor(@inject("ResidualRiskRepository")
  private residualRiskRepository: IResidualRiskRepository) { }

  async execute({ residualRiskData }: ICreateResidualRiskUseCaseProps): Promise<any> {
    const residualRiskCreated = await this.residualRiskRepository.create({ residualRiskData: residualRiskData });
    return residualRiskCreated;
  }
}