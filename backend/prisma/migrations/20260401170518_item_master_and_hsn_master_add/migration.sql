-- CreateTable
CREATE TABLE "ItemMaster" (
    "id" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "hsnCode" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,

    CONSTRAINT "ItemMaster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HSNMaster" (
    "hsnCode" TEXT NOT NULL,
    "importGST" DOUBLE PRECISION NOT NULL,
    "saleGST" DOUBLE PRECISION NOT NULL,
    "localPurchaseGST" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,

    CONSTRAINT "HSNMaster_pkey" PRIMARY KEY ("hsnCode")
);

-- CreateIndex
CREATE UNIQUE INDEX "ItemMaster_itemName_key" ON "ItemMaster"("itemName");

-- AddForeignKey
ALTER TABLE "ItemMaster" ADD CONSTRAINT "ItemMaster_hsnCode_fkey" FOREIGN KEY ("hsnCode") REFERENCES "HSNMaster"("hsnCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemMaster" ADD CONSTRAINT "ItemMaster_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemMaster" ADD CONSTRAINT "ItemMaster_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HSNMaster" ADD CONSTRAINT "HSNMaster_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HSNMaster" ADD CONSTRAINT "HSNMaster_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
