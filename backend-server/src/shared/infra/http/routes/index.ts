import { Router } from "express";
import { riskRoutes } from "./Risk/risk.routes";
import { integrationRoutes } from "./Integration/integration.routes";


const router = Router()

router.use("/risk", riskRoutes);
router.use("/integration", integrationRoutes);

export { router }