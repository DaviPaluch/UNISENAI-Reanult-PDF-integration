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
      ...integrationData
    };
    const riskUseCase = container.resolve(CreateRiskUseCase);
    const riskCreated = await riskUseCase.execute({ riskData });

    //Qualitative Analysis
    const qualitativeAnalysisData: ICreateQualitativeAnalysis = {
      idRisk: riskCreated.id,
      ...integrationData
    };
    const qualitativeAnalysisUseCase = container.resolve(CreateQualitativeAnalysisUseCase);
    const qualitativeAnalysisCreated = await qualitativeAnalysisUseCase.execute({ qualitativeAnalysisData });

    // Residual Risk
    const residualRiskData: ICreateResidualRisk = {
      ...integrationData
    };
    const residualRiskUseCase = container.resolve(CreateResidualRiskUseCase);
    const residualRiskCreated = await residualRiskUseCase.execute({ residualRiskData });

    //Action Plan
    const actionPlanData: ICreateActionPlan = {
      idRisk: riskCreated.id,
      idResidualRisk: residualRiskCreated.id,
      ...integrationData
    }
    const actionPlanUseCase = container.resolve(CreateActionPlanUseCase);
    const actionPlanCreated = await actionPlanUseCase.execute({ actionPlanData });



    return "Success";
  }
}