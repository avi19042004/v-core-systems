import { Test, TestingModule } from '@nestjs/testing';
import { PermissionsGroupsController } from './permissions-groups.controller';
import { PermissionsGroupsService } from './permissions-groups.service';

describe('PermissionsGroupsController', () => {
  let controller: PermissionsGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissionsGroupsController],
      providers: [PermissionsGroupsService],
    }).compile();

    controller = module.get<PermissionsGroupsController>(PermissionsGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
