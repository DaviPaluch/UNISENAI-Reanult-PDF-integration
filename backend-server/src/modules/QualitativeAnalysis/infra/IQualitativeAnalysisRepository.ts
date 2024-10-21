import { ICreateQualitativeAnalysis } from "../dtos/ICreateQualitativeAnalysis";


export interface ICreateQualitativeAnalysisRepositoryProps {
  qualitativeAnalysisData: ICreateQualitativeAnalysis
}


export interface IQualitativeAnalysisRepository {
  create({ qualitativeAnalysisData }: ICreateQualitativeAnalysisRepositoryProps): Promise<any>;
}