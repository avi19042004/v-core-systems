import { Injectable } from '@nestjs/common';
import { CreateItemMasterDto } from './dto/create-item-master.dto';
import { UpdateItemMasterDto } from './dto/update-item-master.dto';

@Injectable()
export class ItemMasterService {
  create(createItemMasterDto: CreateItemMasterDto) {
    return 'This action adds a new itemMaster';
  }

  findAll() {
    return `This action returns all itemMaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemMaster`;
  }

  update(id: number, updateItemMasterDto: UpdateItemMasterDto) {
    return `This action updates a #${id} itemMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemMaster`;
  }
}
