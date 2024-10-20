
export interface ICreateRisk {
  name?: string;
  typeRisk?: string;
  areaResponsibleIdentification?: string;
  riskEntryDate?: Date;
  riskEntryDateWeek?: string;
  consequences?: string;
  project?: string;
  metier?: string;
  jalonAffected?: string;
  impactedJalonFuture?: string;
}