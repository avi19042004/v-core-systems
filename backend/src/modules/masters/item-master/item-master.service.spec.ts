import { Test, TestingModule } from '@nestjs/testing';
import { ItemMasterService } from './item-master.service';

describe('ItemMasterService', () => {
  let service: ItemMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemMasterService],
    }).compile();

    service = module.get<ItemMasterService>(ItemMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
