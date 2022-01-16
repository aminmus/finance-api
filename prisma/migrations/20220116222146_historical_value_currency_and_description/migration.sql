/*
  Warnings:

  - Added the required column `currency` to the `HistoricalValue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HistoricalValue" ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "description" TEXT;
