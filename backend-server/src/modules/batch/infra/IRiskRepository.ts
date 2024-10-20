import { ICreateRisk } from "../dtos/ICreateBatch";
import { RiskType } from "./RiskType";


export interface ICreateRiskRepositoryProps {
  riskData: ICreateRisk
}


export interface IRiskRepository {
  create({ riskData }: ICreateRiskRepositoryProps): Promise<any>;
}