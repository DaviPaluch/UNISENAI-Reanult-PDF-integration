import { inject, injectable } from "tsyringe";
import { ICreateQualitativeAnalysis } from "../../dtos/ICreateQualitativeAnalysis";
import { IQualitativeAnalysisRepository } from "../../infra/IQualitativeAnalysisRepository";

interface ICreateQualitativeAnalysisUseCaseProps {
  qualitativeAnalysisData: ICreateQualitativeAnalysis
}

@injectable()
export class CreateQualitativeAnalysisUseCase {
  constructor(@inject("QualitativeAnalysisRepository")
  private qualitativeAnalysisRepository: IQualitativeAnalysisRepository) { }

  async execute({ qualitativeAnalysisData }: ICreateQualitativeAnalysisUseCaseProps): Promise<any> {
    const qualitativeAnalysisCreated = await this.qualitativeAnalysisRepository.create({ qualitativeAnalysisData });
    return qualitativeAnalysisCreated;
  }
}