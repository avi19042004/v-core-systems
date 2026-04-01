import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemMasterService } from './item-master.service';
import { CreateItemMasterDto } from './dto/create-item-master.dto';
import { UpdateItemMasterDto } from './dto/update-item-master.dto';

@Controller('item-master')
export class ItemMasterController {
  constructor(private readonly itemMasterService: ItemMasterService) {}

  @Post()
  create(@Body() createItemMasterDto: CreateItemMasterDto) {
    return this.itemMasterService.create(createItemMasterDto);
  }

  @Get()
  findAll() {
    return this.itemMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemMasterDto: UpdateItemMasterDto) {
    return this.itemMasterService.update(+id, updateItemMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemMasterService.remove(+id);
  }
}
