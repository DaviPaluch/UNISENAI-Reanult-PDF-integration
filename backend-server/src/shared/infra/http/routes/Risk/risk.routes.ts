import { CreateRiskController } from "@modules/Risk/useCases/createRisk/CreateRiskController";
import { Router } from "express";


const riskRoutes = Router();

const createRiskController = new CreateRiskController();
riskRoutes.post("/", createRiskController.handle);

export { riskRoutes }