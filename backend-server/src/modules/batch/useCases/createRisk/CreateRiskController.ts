import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateRisk } from "../../dtos/ICreateBatch";
import { CreateRiskUseCase } from "./CreateRiskUseCase";

export class CreateRiskController {
  async handle(req: Request, res: Response) {

    const {
      name,
      typeRisk,
      areaResponsibleIdentification,
      riskEntryDate, riskEntryDateWeek,
      consequences,
      project,
      metier,
      jalonAffected,
      impactedJalonFuture }: ICreateRisk = req.body;

    const riskData: ICreateRisk = {
      name,
      typeRisk,
      areaResponsibleIdentification,
      riskEntryDate,
      riskEntryDateWeek,
      consequences,
      project,
      metier,
      jalonAffected,
      impactedJalonFuture
    };

    console.log(riskData);

    const createRiskUseCase = container.resolve(CreateRiskUseCase);

    const riskCreated = await createRiskUseCase.execute({ riskData });

    return res.status(201).json(riskCreated);
  }
}