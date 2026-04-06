import { Injectable } from '@nestjs/common';
import { CreateItemGroupMasterDto } from './dto/create-item-group-master.dto';
import { UpdateItemGroupMasterDto } from './dto/update-item-group-master.dto';
import { PrismaService } from '@app/common/databaseService/db.service';

@Injectable()
export class ItemGroupMasterService {
  constructor(private prisma: PrismaService){}
  async create(createItemGroupMasterDto: CreateItemGroupMasterDto) {
    try{
      const newItemGroup = await this.prisma.itemGroupMaster.create({
        data: createItemGroupMasterDto
      });
      return {msg: "Item Group Created SuccessFully", newItemGroup}
    }catch(err){
      console.log(err)
    }
  }

  async findAll() {
    const itemGroups = await this.prisma.itemGroupMaster.findMany({})
    return({msg: "Item Group Master Data", itemGroups})
  }

  async findOne(id: string) {
    const itemGroup = await this.prisma.itemGroupMaster.findUnique({
      where: {itemGroupId: id}
    }) 
    return({msg: "Item Group Details", itemGroup})
  }

  async update(id: string, updateItemGroupMasterDto: UpdateItemGroupMasterDto) {
    try{
      const updatedItemGroup = await this.prisma.itemGroupMaster.update({
        where:{itemGroupId: id},
        data: updateItemGroupMasterDto
      })
    }catch(err){
      console.log(err)
    }
  }
}
