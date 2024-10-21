import { CreateIntegrationController } from "@modules/Integration/useCases/createRisk/CreateIntegrationController";
import { Router } from "express";


const integrationRoutes = Router();

const createIntegrationController = new CreateIntegrationController();
integrationRoutes.post("/", createIntegrationController.handle);

export { integrationRoutes }