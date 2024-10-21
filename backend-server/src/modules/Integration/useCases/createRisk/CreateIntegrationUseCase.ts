import { container, inject, injectable } from "tsyringe";
import { ICreateIntegration } from "../../dtos/ICreateIntegration";
import { CreateRiskUseCase } from "@modules/Risk/useCases/createRisk/CreateRiskUseCase";

interface ICreateIntegrationUseCaseProps {
  integrationData: ICreateIntegration
}

export class CreateIntegrationUseCase {
  async execute({ integrationData }: ICreateIntegrationUseCaseProps): Promise<any> {

    const createRiskUseCase = container.resolve(CreateRiskUseCase);
    await createRiskUseCase.execute({ riskData: integrationData });

    return "Success";
  }
}