import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PermissionsGroupsModule } from './modules/permissions-groups/permissions-groups.module';
import { ItemMasterModule } from './modules/item-master/item-master.module';
import { PrismaService } from '@app/common/databaseService/prisma.service';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PermissionsGroupsModule,
    ItemMasterModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
