-- CreateEnum
CREATE TYPE "Classification" AS ENUM ('VERY_LOW', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH');

-- CreateEnum
CREATE TYPE "RiskRating" AS ENUM ('SUSTAINABLE', 'MODERATE', 'SEVERE', 'CRITICAL');

-- CreateEnum
CREATE TYPE "Validation" AS ENUM ('IN_TRAJECTORY', 'RESOLVED', 'AT_RISK', 'PROBLEM');

-- CreateTable
CREATE TABLE "Risk" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typeRisk" TEXT NOT NULL,
    "areaResponsibleIdentification" TEXT NOT NULL,
    "riskEntryDate" TIMESTAMP(3) NOT NULL,
    "riskEntryDateWeek" TEXT NOT NULL,
    "consequences" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "metier" TEXT NOT NULL,
    "jalonAffected" TEXT NOT NULL,
    "impactedJalonFuture" TEXT NOT NULL,

    CONSTRAINT "Risk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QualitativeAnalysis" (
    "id" TEXT NOT NULL,
    "idRisk" TEXT NOT NULL,
    "probability" "Classification" NOT NULL,
    "impact" "Classification" NOT NULL,
    "riskRating" "RiskRating" NOT NULL,
    "ImpactRenault" TEXT NOT NULL,

    CONSTRAINT "QualitativeAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResidualRisk" (
    "id" TEXT NOT NULL,
    "residualProbability" "Classification" NOT NULL,
    "residualImpact" "Classification" NOT NULL,
    "residualRiskRating" "RiskRating" NOT NULL,
    "actionValidation" "Validation" NOT NULL,
    "riskValidation" "Validation" NOT NULL,
    "resolutionDate" TIMESTAMP(3) NOT NULL,
    "resolutionDateWeek" TEXT NOT NULL,
    "riskId" TEXT,

    CONSTRAINT "ResidualRisk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionPlan" (
    "id" TEXT NOT NULL,
    "idRisk" TEXT NOT NULL,
    "idResidualRisk" TEXT NOT NULL,
    "strategy" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "pilotName" TEXT NOT NULL,
    "initialPlanDate" TIMESTAMP(3) NOT NULL,
    "initialPlanDateWeek" TEXT NOT NULL,
    "alertDate" TIMESTAMP(3) NOT NULL,
    "alertDateWeek" TEXT NOT NULL,
    "resolutionTime" INTEGER NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "comments" TEXT NOT NULL,
    "isCapitalization" BOOLEAN NOT NULL,

    CONSTRAINT "ActionPlan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QualitativeAnalysis" ADD CONSTRAINT "QualitativeAnalysis_idRisk_fkey" FOREIGN KEY ("idRisk") REFERENCES "Risk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionPlan" ADD CONSTRAINT "ActionPlan_idRisk_fkey" FOREIGN KEY ("idRisk") REFERENCES "Risk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
