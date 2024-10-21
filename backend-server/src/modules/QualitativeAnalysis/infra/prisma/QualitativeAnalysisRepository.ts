import { prisma } from "database/client";
import { ICreateQualitativeAnalysisRepositoryProps, IQualitativeAnalysisRepository } from "../IQualitativeAnalysisRepository";


export class QualitativeAnalysisRepository implements IQualitativeAnalysisRepository {
  async create({ qualitativeAnalysisData }: ICreateQualitativeAnalysisRepositoryProps): Promise<any> {
    const riskResult = await prisma.qualitativeAnalysis.create({
      data: {
        idRisk: qualitativeAnalysisData.idRisk,
        probability: qualitativeAnalysisData.probability,
        impact: qualitativeAnalysisData.impact,
        riskRating: qualitativeAnalysisData.riskRating,
        impactRenault: qualitativeAnalysisData.impactRenault
      }
    })

    return riskResult;
  }

}