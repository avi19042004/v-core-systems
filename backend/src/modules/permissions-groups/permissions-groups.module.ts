import { Module } from '@nestjs/common';
import { PermissionsGroupsService } from './permissions-groups.service';
import { PermissionsGroupsController } from './permissions-groups.controller';

@Module({
  controllers: [PermissionsGroupsController],
  providers: [PermissionsGroupsService],
})
export class PermissionsGroupsModule {}
