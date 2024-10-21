/*
  Warnings:

  - You are about to drop the column `riskId` on the `ResidualRisk` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "QualitativeAnalysis" DROP CONSTRAINT "QualitativeAnalysis_idRisk_fkey";

-- AlterTable
ALTER TABLE "QualitativeAnalysis" ALTER COLUMN "idRisk" DROP NOT NULL,
ALTER COLUMN "probability" DROP NOT NULL,
ALTER COLUMN "impact" DROP NOT NULL,
ALTER COLUMN "riskRating" DROP NOT NULL,
ALTER COLUMN "impactRenault" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ResidualRisk" DROP COLUMN "riskId";

-- AddForeignKey
ALTER TABLE "QualitativeAnalysis" ADD CONSTRAINT "QualitativeAnalysis_idRisk_fkey" FOREIGN KEY ("idRisk") REFERENCES "Risk"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionPlan" ADD CONSTRAINT "ActionPlan_idResidualRisk_fkey" FOREIGN KEY ("idResidualRisk") REFERENCES "ResidualRisk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
