export interface ICreateActionPlan {
  idRisk: string;
  idResidualRisk?: string;
  strategy?: string;
  action?: string;
  pilotName?: string;
  initialPlanDate?: Date;
  initialPlanDateWeek?: string;
  alertDate?: Date;
  alertDateWeek?: string;
  resolutionTime?: number;
  time?: number;
  comments?: string;
  isCapitalization?: boolean;
}
