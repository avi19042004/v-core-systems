import { Module } from '@nestjs/common';
import { ItemGroupMasterService } from './item-group-master.service';
import { ItemGroupMasterController } from './item-group-master.controller';

@Module({
  controllers: [ItemGroupMasterController],
  providers: [ItemGroupMasterService],
})
export class ItemGroupMasterModule {}
