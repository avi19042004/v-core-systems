import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemGroupMasterService } from './item-group-master.service';
import { CreateItemGroupMasterDto } from './dto/create-item-group-master.dto';
import { UpdateItemGroupMasterDto } from './dto/update-item-group-master.dto';

@Controller('item-group-master')
export class ItemGroupMasterController {
  constructor(private readonly itemGroupMasterService: ItemGroupMasterService) {}

  @Post()
  create(@Body() createItemGroupMasterDto: CreateItemGroupMasterDto) {
    return this.itemGroupMasterService.create(createItemGroupMasterDto);
  }

  @Get()
  findAll() {
    return this.itemGroupMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemGroupMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemGroupMasterDto: UpdateItemGroupMasterDto) {
    return this.itemGroupMasterService.update(+id, updateItemGroupMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemGroupMasterService.remove(+id);
  }
}
