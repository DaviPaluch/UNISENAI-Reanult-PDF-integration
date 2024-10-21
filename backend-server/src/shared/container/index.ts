import { IActionPlanRepository } from "@modules/ActionPlan/infra/IActionPlanRepository";
import { ActionPlanRepository } from "@modules/ActionPlan/infra/prisma/ActionPlanRepository";
import { IQualitativeAnalysisRepository } from "@modules/QualitativeAnalysis/infra/IQualitativeAnalysisRepository";
import { QualitativeAnalysisRepository } from "@modules/QualitativeAnalysis/infra/prisma/QualitativeAnalysisRepository";
import { IResidualRiskRepository } from "@modules/ResidualRisk/infra/IResidualRiskRepository";
import { ResidualRiskRepository } from "@modules/ResidualRisk/infra/prisma/ResidualRiskRepository";
import { IRiskRepository } from "@modules/Risk/infra/IRiskRepository";
import { RiskRepository } from "@modules/Risk/infra/prisma/RiskRepository";
import { container } from "tsyringe";

container.registerSingleton<IRiskRepository>(
  "RiskRepository",
  RiskRepository
);

container.registerSingleton<IResidualRiskRepository>(
  "ResidualRiskRepository",
  ResidualRiskRepository
);

container.registerSingleton<IQualitativeAnalysisRepository>(
  "QualitativeAnalysisRepository",
  QualitativeAnalysisRepository
);

container.registerSingleton<IActionPlanRepository>(
  "ActionPlanRepository",
  ActionPlanRepository
);