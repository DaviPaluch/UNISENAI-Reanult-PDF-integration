import { prisma } from "database/client";
import { ICreateResidualRiskRepositoryProps, IResidualRiskRepository } from "../IResidualRiskRepository";


export class ResidualRiskRepository implements IResidualRiskRepository {
  async create({ residualRiskData }: ICreateResidualRiskRepositoryProps): Promise<any> {
    const residualRiskResult = await prisma.residualRisk.create({
      data: {
        residualProbability: residualRiskData.residualProbability,
        residualImpact: residualRiskData.residualImpact,
        residualRiskRating: residualRiskData.residualRiskRating,
        actionValidation: residualRiskData.actionValidation,
        riskValidation: residualRiskData.riskValidation,
        resolutionDate: residualRiskData.resolutionDate,
        resolutionDateWeek: residualRiskData.resolutionDateWeek
      }
    })

    return residualRiskResult;
  }
}