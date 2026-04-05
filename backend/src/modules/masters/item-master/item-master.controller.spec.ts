import { Test, TestingModule } from '@nestjs/testing';
import { ItemMasterController } from './item-master.controller';
import { ItemMasterService } from './item-master.service';

describe('ItemMasterController', () => {
  let controller: ItemMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemMasterController],
      providers: [ItemMasterService],
    }).compile();

    controller = module.get<ItemMasterController>(ItemMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
