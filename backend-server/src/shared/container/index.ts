import { IRiskRepository } from "@modules/Risk/infra/IRiskRepository";
import { RiskRepository } from "@modules/Risk/infra/prisma/RiskRepository";
import { container } from "tsyringe";

container.registerSingleton<IRiskRepository>(
  "RiskRepository",
  RiskRepository
);
