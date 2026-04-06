import { Test, TestingModule } from '@nestjs/testing';
import { ItemGroupMasterController } from './item-group-master.controller';
import { ItemGroupMasterService } from './item-group-master.service';

describe('ItemGroupMasterController', () => {
  let controller: ItemGroupMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemGroupMasterController],
      providers: [ItemGroupMasterService],
    }).compile();

    controller = module.get<ItemGroupMasterController>(ItemGroupMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
