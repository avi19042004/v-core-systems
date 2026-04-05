/*
  Warnings:

  - A unique constraint covering the columns `[itemGroupName]` on the table `ItemGroupMaster` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemGroupName` to the `ItemGroupMaster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemGroupMaster" ADD COLUMN     "itemGroupName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ItemGroupMaster_itemGroupName_key" ON "ItemGroupMaster"("itemGroupName");
