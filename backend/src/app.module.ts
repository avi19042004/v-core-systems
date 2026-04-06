import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PermissionsGroupsModule } from './modules/permissions-groups/permissions-groups.module';
import { PrismaService } from '@app/common/databaseService/db.service';
import { ItemMasterModule } from './modules/masters/item-master/item-master.module';
import { ItemGroupMasterModule } from './modules/masters/item-group-master/item-group-master.module';
import { PrismaModule } from './common/databaseService/db.module';

@Module({
  imports: [
    AuthModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PermissionsGroupsModule,
    ItemMasterModule,
    ItemGroupMasterModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
