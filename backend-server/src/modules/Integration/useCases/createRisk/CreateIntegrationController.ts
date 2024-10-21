import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateIntegration } from "../../dtos/ICreateIntegration";
import { CreateIntegrationUseCase } from "./CreateIntegrationUseCase";

export class CreateIntegrationController {
  async handle(req: Request, res: Response) {

    const {
      // Risk
      name,
      typeRisk,
      areaResponsibleIdentification,
      riskEntryDate, riskEntryDateWeek,
      consequences,
      project,
      metier,
      jalonAffected,
      impactedJalonFuture,
      // Qualitative Analysis
      probability,
      impact,
      riskRating,
      impactRenault,
      // Action Plan
      strategy,
      action,
      pilotName,
      initialPlanDate,
      initialPlanDateWeek,
      alertDate,
      alertDateWeek,
      resolutionTime,
      time,
      comments,
      isCapitalization,
      // Residual Risk
      residualProbability,
      residualImpact,
      residualRiskRating,
      actionValidation,
      riskValidation,
      resolutionDate,
      resolutionDateWeek,
    }: ICreateIntegration = req.body;

    const integrationData: ICreateIntegration = {
      // Risk
      name,
      typeRisk,
      areaResponsibleIdentification,
      riskEntryDate, riskEntryDateWeek,
      consequences,
      project,
      metier,
      jalonAffected,
      impactedJalonFuture,
      // Qualitative Analysis
      probability,
      impact,
      riskRating,
      impactRenault,
      // Action Plan
      strategy,
      action,
      pilotName,
      initialPlanDate,
      initialPlanDateWeek,
      alertDate,
      alertDateWeek,
      resolutionTime,
      time,
      comments,
      isCapitalization,
      // Residual Risk
      residualProbability,
      residualImpact,
      residualRiskRating,
      actionValidation,
      riskValidation,
      resolutionDate,
      resolutionDateWeek,
    };

    console.log(integrationData);

    const createIntegrationUseCase = new CreateIntegrationUseCase();

    const interationCreated = await createIntegrationUseCase.execute({ integrationData });

    return res.status(201).json(interationCreated);
  }
}