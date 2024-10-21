import { ICreateActionPlan } from "../dtos/ICreateActionPlan";


export interface ICreateActionPlanRepositoryProps {
  actionPlanData: ICreateActionPlan
}


export interface IActionPlanRepository {
  create({ actionPlanData }: ICreateActionPlanRepositoryProps): Promise<any>;
}