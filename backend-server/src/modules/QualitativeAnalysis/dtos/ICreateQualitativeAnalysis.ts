import { Classification, RiskRating } from "@prisma/client";

export interface ICreateQualitativeAnalysis {
  idRisk?: string;
  probability?: Classification;
  impact?: Classification;
  riskRating?: RiskRating;
  impactRenault?: string;
}
