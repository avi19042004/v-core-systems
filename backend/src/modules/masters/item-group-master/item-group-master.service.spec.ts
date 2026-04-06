import { Test, TestingModule } from '@nestjs/testing';
import { ItemGroupMasterService } from './item-group-master.service';

describe('ItemGroupMasterService', () => {
  let service: ItemGroupMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemGroupMasterService],
    }).compile();

    service = module.get<ItemGroupMasterService>(ItemGroupMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
