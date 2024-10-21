import { prisma } from "database/client";
import { ICreateActionPlanRepositoryProps, IActionPlanRepository } from "../IActionPlanRepository";


export class ActionPlanRepository implements IActionPlanRepository {
  async create({ actionPlanData }: ICreateActionPlanRepositoryProps): Promise<any> {
    const actionPlanResult = await prisma.actionPlan.create({
      data: {
        idRisk: actionPlanData.idRisk,
        idResidualRisk: actionPlanData.idResidualRisk,
        strategy: actionPlanData.strategy,
        action: actionPlanData.action,
        pilotName: actionPlanData.pilotName,
        initialPlanDate: actionPlanData.initialPlanDate,
        initialPlanDateWeek: actionPlanData.initialPlanDateWeek,
        alertDate: actionPlanData.alertDate,
        alertDateWeek: actionPlanData.alertDateWeek,
        resolutionTime: actionPlanData.resolutionTime,
        time: actionPlanData.time,
        comments: actionPlanData.comments,
        isCapitalization: actionPlanData.isCapitalization
      }
    })

    return actionPlanResult;
  }

}