import { Classification, RiskRating, Validation } from "@prisma/client";

export interface ICreateResidualRisk {
  residualProbability?: Classification;
  residualImpact?: Classification;
  residualRiskRating?: RiskRating;
  actionValidation?: Validation;
  riskValidation?: Validation;
  resolutionDate?: Date;
  resolutionDateWeek?: string;
}
