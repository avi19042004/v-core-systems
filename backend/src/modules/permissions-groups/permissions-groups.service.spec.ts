import { Test, TestingModule } from '@nestjs/testing';
import { PermissionsGroupsService } from './permissions-groups.service';

describe('PermissionsGroupsService', () => {
  let service: PermissionsGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionsGroupsService],
    }).compile();

    service = module.get<PermissionsGroupsService>(PermissionsGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
