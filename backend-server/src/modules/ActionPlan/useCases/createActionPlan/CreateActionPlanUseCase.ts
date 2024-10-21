import { inject, injectable } from "tsyringe";
import { ICreateActionPlan } from "../../dtos/ICreateActionPlan";
import { IActionPlanRepository } from "../../infra/IActionPlanRepository";

interface ICreateActionPlanUseCaseProps {
  actionPlanData: ICreateActionPlan
}

@injectable()
export class CreateActionPlanUseCase {
  constructor(@inject("ActionPlanRepository")
  private actionPlanRepository: IActionPlanRepository) { }

  async execute({ actionPlanData }: ICreateActionPlanUseCaseProps): Promise<any> {
    const actionPlanCreated = await this.actionPlanRepository.create({ actionPlanData });
    return actionPlanCreated;
  }
}