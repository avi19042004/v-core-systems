import { Module } from '@nestjs/common';
import { ItemMasterService } from './item-master.service';
import { ItemMasterController } from './item-master.controller';
import { PrismaService } from '@app/common/databaseService/prisma.service';

@Module({
  controllers: [ItemMasterController],
  providers: [ItemMasterService, PrismaService],
})
export class ItemMasterModule {}
