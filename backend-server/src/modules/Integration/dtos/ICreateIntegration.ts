import { ICreateActionPlan } from "@modules/ActionPlan/dtos/ICreateActionPlan";
import { ICreateQualitativeAnalysis } from "@modules/QualitativeAnalysis/dtos/ICreateQualitativeAnalysis";
import { ICreateResidualRisk } from "@modules/ResidualRisk/dtos/ICreateResidualRisk";
import { ICreateRisk } from "@modules/Risk/dtos/ICreateRisk";

export interface ICreateIntegration extends
  ICreateRisk,
  Omit<ICreateQualitativeAnalysis, 'idRisk'>,
  Omit<ICreateActionPlan, 'idRisk' | 'idResidualRisk'>,
  ICreateResidualRisk { }
