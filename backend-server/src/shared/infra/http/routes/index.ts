import { Router } from "express";
import { riskRoutes } from "./Risk/risk.routes";


const router = Router()

router.use("/risk", riskRoutes);

export { router }