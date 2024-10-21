import { container } from "tsyringe";
import { ICreateIntegration } from "../../dtos/ICreateIntegration";
import { CreateRiskUseCase } from "@modules/Risk/useCases/createRisk/CreateRiskUseCase";
import { ICreateQualitativeAnalysis } from "@modules/QualitativeAnalysis/dtos/ICreateQualitativeAnalysis";
import { CreateQualitativeAnalysisUseCase } from "@modules/QualitativeAnalysis/useCases/createQualitativeAnalysis/CreateQualitativeAnalysisUseCase";
import { ICreateRisk } from "@modules/Risk/dtos/ICreateRisk";
import { ICreateResidualRisk } from "@modules/ResidualRisk/dtos/ICreateResidualRisk";
import { CreateResidualRiskUseCase } from "@modules/ResidualRisk/useCases/createResidualRisk/CreateResidualRiskUseCase";
import { ICreateActionPlan } from "@modules/ActionPlan/dtos/ICreateActionPlan";
import { CreateActionPlanUseCase } from "@modules/ActionPlan/useCases/createActionPlan/CreateActionPlanUseCase";

interface ICreateIntegrationUseCaseProps {
  integrationData: ICreateIntegration
}

export class CreateIntegrationUseCase {
  async execute({ integrationData }: ICreateIntegrationUseCaseProps): Promise<any> {

    //Risk
    const riskData: ICreateRisk = {
      name: integrationData.name,
      typeRisk: integrationData.typeRisk,
      areaResponsibleIdentification: integrationData.areaResponsibleIdentification,
      riskEntryDate: integrationData.riskEntryDate,
      riskEntryDateWeek: integrationData.riskEntryDateWeek,
      consequences: integrationData.consequences,
      project: integrationData.project,
      metier: integrationData.metier,
      jalonAffected: integrationData.jalonAffected,
      impactedJalonFuture: integrationData.impactedJalonFuture
    };
    const riskUseCase = container.resolve(CreateRiskUseCase);
    const riskCreated = await riskUseCase.execute({ riskData });

    //Qualitative Analysis
    const qualitativeAnalysisData: ICreateQualitativeAnalysis = {
      idRisk: riskCreated.id,
      probability: integrationData.probability,
      impact: integrationData.impact,
      riskRating: integrationData.riskRating,
      impactRenault: integrationData.impactRenault
    };
    const qualitativeAnalysisUseCase = container.resolve(CreateQualitativeAnalysisUseCase);
    const qualitativeAnalysisCreated = await qualitativeAnalysisUseCase.execute({ qualitativeAnalysisData });

    // Residual Risk
    const residualRiskData: ICreateResidualRisk = {
      residualProbability: integrationData.residualProbability,
      residualImpact: integrationData.residualImpact,
      residualRiskRating: integrationData.residualRiskRating,
      actionValidation: integrationData.actionValidation,
      riskValidation: integrationData.riskValidation,
      resolutionDate: integrationData.resolutionDate,
      resolutionDateWeek: integrationData.resolutionDateWeek
    };
    const residualRiskUseCase = container.resolve(CreateResidualRiskUseCase);
    const residualRiskCreated = await residualRiskUseCase.execute({ residualRiskData });

    //Action Plan
    const actionPlanData: ICreateActionPlan = {
      idRisk: riskCreated.id,
      idResidualRisk: residualRiskCreated.id,
      strategy: integrationData.strategy,
      action: integrationData.action,
      pilotName: integrationData.pilotName,
      initialPlanDate: integrationData.initialPlanDate,
      initialPlanDateWeek: integrationData.initialPlanDateWeek,
      alertDate: integrationData.alertDate,
      alertDateWeek: integrationData.alertDateWeek,
      resolutionTime: integrationData.resolutionTime,
      time: integrationData.time,
      comments: integrationData.comments,
      isCapitalization: integrationData.isCapitalization
    }
    const actionPlanUseCase = container.resolve(CreateActionPlanUseCase);
    const actionPlanCreated = await actionPlanUseCase.execute({ actionPlanData });



    return "Success";
  }
}