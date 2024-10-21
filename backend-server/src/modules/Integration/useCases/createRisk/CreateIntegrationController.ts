import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateIntegration } from "../../dtos/ICreateIntegration";
import { CreateIntegrationUseCase } from "./CreateIntegrationUseCase";

export class CreateIntegrationController {
  async handle(req: Request, res: Response) {

    const integrationBatchData: ICreateIntegration[] = req.body;

    if (!Array.isArray(integrationBatchData)) {
      return res.status(400).json({ error: "O corpo da requisição deve ser um array de ICreateIntegration." });
    }

    const createIntegrationUseCase = new CreateIntegrationUseCase();

    // TODO: Add validation and Response
    const integrationsCreated = await Promise.all(
      integrationBatchData.map(async (integrationData) => {
        return await createIntegrationUseCase.execute({ integrationData });
      })
    );

    return res.status(201).json(integrationsCreated);
  }
}
