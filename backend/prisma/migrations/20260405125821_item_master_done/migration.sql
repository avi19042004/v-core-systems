/*
  Warnings:

  - The primary key for the `ItemMaster` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ItemMaster` table. All the data in the column will be lost.
  - The primary key for the `PermissionGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PermissionGroup` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - Added the required column `description` to the `HSNMaster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `HSNMaster` table without a default value. This is not possible if the table is not empty.
  - The required column `itemCode` was added to the `ItemMaster` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `itemGroupId` to the `ItemMaster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `umo` to the `ItemMaster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ItemMaster` table without a default value. This is not possible if the table is not empty.
  - The required column `permissionGroupId` was added to the `PermissionGroup` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `userId` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "HSNMaster" DROP CONSTRAINT "HSNMaster_createdById_fkey";

-- DropForeignKey
ALTER TABLE "HSNMaster" DROP CONSTRAINT "HSNMaster_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "ItemMaster" DROP CONSTRAINT "ItemMaster_createdById_fkey";

-- DropForeignKey
ALTER TABLE "ItemMaster" DROP CONSTRAINT "ItemMaster_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_permissionGroupId_fkey";

-- AlterTable
ALTER TABLE "HSNMaster" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ItemMaster" DROP CONSTRAINT "ItemMaster_pkey",
DROP COLUMN "id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "itemCode" TEXT NOT NULL,
ADD COLUMN     "itemGroupId" TEXT NOT NULL,
ADD COLUMN     "umo" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "ItemMaster_pkey" PRIMARY KEY ("itemCode");

-- AlterTable
ALTER TABLE "PermissionGroup" DROP CONSTRAINT "PermissionGroup_pkey",
DROP COLUMN "id",
ADD COLUMN     "permissionGroupId" TEXT NOT NULL,
ADD CONSTRAINT "PermissionGroup_pkey" PRIMARY KEY ("permissionGroupId");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");

-- CreateTable
CREATE TABLE "ItemGroupMaster" (
    "itemGroupId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemGroupMaster_pkey" PRIMARY KEY ("itemGroupId")
);

-- CreateTable
CREATE TABLE "LotMaster" (
    "lotNumber" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,

    CONSTRAINT "LotMaster_pkey" PRIMARY KEY ("lotNumber")
);

-- CreateTable
CREATE TABLE "WareHouse" (
    "warehouseId" TEXT NOT NULL,
    "wareHouseName" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,

    CONSTRAINT "WareHouse_pkey" PRIMARY KEY ("warehouseId")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "itemId" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "stock" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("itemId","warehouseId","lotNumber")
);

-- CreateTable
CREATE TABLE "StockLedger" (
    "ledgerId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "quntity" DOUBLE PRECISION NOT NULL,
    "transactionType" TEXT NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "referenceId" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "StockLedger_pkey" PRIMARY KEY ("ledgerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "WareHouse_wareHouseName_key" ON "WareHouse"("wareHouseName");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_permissionGroupId_fkey" FOREIGN KEY ("permissionGroupId") REFERENCES "PermissionGroup"("permissionGroupId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemMaster" ADD CONSTRAINT "ItemMaster_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "ItemGroupMaster"("itemGroupId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemMaster" ADD CONSTRAINT "ItemMaster_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemMaster" ADD CONSTRAINT "ItemMaster_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemGroupMaster" ADD CONSTRAINT "ItemGroupMaster_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemGroupMaster" ADD CONSTRAINT "ItemGroupMaster_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HSNMaster" ADD CONSTRAINT "HSNMaster_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HSNMaster" ADD CONSTRAINT "HSNMaster_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LotMaster" ADD CONSTRAINT "LotMaster_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "ItemMaster"("itemCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LotMaster" ADD CONSTRAINT "LotMaster_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LotMaster" ADD CONSTRAINT "LotMaster_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WareHouse" ADD CONSTRAINT "WareHouse_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WareHouse" ADD CONSTRAINT "WareHouse_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "ItemMaster"("itemCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "WareHouse"("warehouseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_lotNumber_fkey" FOREIGN KEY ("lotNumber") REFERENCES "LotMaster"("lotNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockLedger" ADD CONSTRAINT "StockLedger_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "ItemMaster"("itemCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockLedger" ADD CONSTRAINT "StockLedger_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "WareHouse"("warehouseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockLedger" ADD CONSTRAINT "StockLedger_lotNumber_fkey" FOREIGN KEY ("lotNumber") REFERENCES "LotMaster"("lotNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
