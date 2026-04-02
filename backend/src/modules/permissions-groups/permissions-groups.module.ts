import { Module } from '@nestjs/common';
import { PermissionsGroupsService } from './permissions-groups.service';
import { PermissionsGroupsController } from './permissions-groups.controller';
import { PrismaService } from '@app/common/databaseService/prisma.service';

@Module({
  controllers: [PermissionsGroupsController],
  providers: [PermissionsGroupsService, PrismaService],
})
export class PermissionsGroupsModule {}
