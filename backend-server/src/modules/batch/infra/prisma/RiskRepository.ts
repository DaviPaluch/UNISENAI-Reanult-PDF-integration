import { prisma } from "database/client";
import { ICreateRiskRepositoryProps, IRiskRepository } from "../IRiskRepository";


export class RiskRepository implements IRiskRepository {
  async create({ riskData }: ICreateRiskRepositoryProps): Promise<any> {
    const riskResult = await prisma.risk.create({
      data: {
        name: riskData.name,
        typeRisk: riskData.typeRisk,
        areaResponsibleIdentification: riskData.areaResponsibleIdentification,
        riskEntryDate: riskData.riskEntryDate,
        riskEntryDateWeek: riskData.riskEntryDateWeek,
        consequences: riskData.consequences,
        project: riskData.project,
        metier: riskData.metier,
        jalonAffected: riskData.jalonAffected,
        impactedJalonFuture: riskData.impactedJalonFuture
      }
    })

    return riskResult;
  }

}