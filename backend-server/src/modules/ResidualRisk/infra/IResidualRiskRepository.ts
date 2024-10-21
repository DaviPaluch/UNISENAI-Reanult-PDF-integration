import { ICreateResidualRisk } from "../dtos/ICreateResidualRisk";

export interface ICreateResidualRiskRepositoryProps {
  residualRiskData: ICreateResidualRisk
}


export interface IResidualRiskRepository {
  create({ residualRiskData }: ICreateResidualRiskRepositoryProps): Promise<any>;
}