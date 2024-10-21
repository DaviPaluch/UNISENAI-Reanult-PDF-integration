/*
  Warnings:

  - You are about to drop the column `ImpactRenault` on the `QualitativeAnalysis` table. All the data in the column will be lost.
  - Added the required column `impactRenault` to the `QualitativeAnalysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QualitativeAnalysis" DROP COLUMN "ImpactRenault",
ADD COLUMN     "impactRenault" TEXT NOT NULL;
