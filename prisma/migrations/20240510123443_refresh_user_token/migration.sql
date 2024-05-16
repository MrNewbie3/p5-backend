/*
  Warnings:

  - A unique constraint covering the columns `[fcm_token]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fcm_token" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_fcm_token_key" ON "User"("fcm_token");
