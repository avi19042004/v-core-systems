  import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
  import { UpdateItemMasterDto } from './dto/update-item-master.dto';
  import { PrismaService } from '@app/common/databaseService/db.service';
  import { Prisma } from '@generated/prisma/client';
  import { CreateItemMasterDto } from './dto/create-item-master.dto';

  @Injectable()
  export class ItemMasterService {
    constructor(private prisma: PrismaService){}
    async create(createItemMasterDto: CreateItemMasterDto) {
      try{
        const newItem = await this.prisma.itemMaster.create({
          data: createItemMasterDto
        });

        return {msg: "Item Created SuccessFully", newItem}
      }catch(err){
        this.handlePrismaError(err, createItemMasterDto.itemName);
        throw new InternalServerErrorException({msg: "Something went wrong on our end."});
      }
    }

    async findAll() {
      try{
        const items = await this.prisma.itemMaster.findMany({
          include: {
            itemGroupMaster: { select: { itemGroupName: true } },
          }
        })

        return({msg: "ItemMaster Data", items})
      }catch(err){
        throw new InternalServerErrorException({msg: "Something went wrong on our end."});
      }
    }

    async findOne(id: string) {
      try{
        const item = await this.prisma.itemMaster.findUnique({
          where: {itemCode: id},
          include: {
            itemGroupMaster: { select: { itemGroupName: true } },
          }
        })
        return({msg: "Item Data", item})
      }catch(err){
        throw new InternalServerErrorException({msg: "Something went wrong on our end."});
      }
    }

    async update(id: string, updateItemMasterDto: UpdateItemMasterDto) {
      try{
        const updateItem = await this.prisma.itemMaster.update({
          where: {itemCode: id},
          data: updateItemMasterDto
        })
        return ({msg: "Item Update Successfull", updateItem})
      }catch(err){
        this.handlePrismaError(err, updateItemMasterDto.itemName);
        throw new InternalServerErrorException({msg: "Something went wrong on our end."});
      }
    }


    private handlePrismaError(err: any, itemName?:string){
      if(err instanceof Prisma.PrismaClientKnownRequestError){
        if(err.code === 'P2002') throw new ConflictException({msg: `Item name "${itemName}" is already taken.`});
        if(err.code === 'P2003')throw new BadRequestException({msg: `Invalid Reference: Ensure the Item Group and HSN Code are correct.`});
        if(err.code === 'P2025') throw new BadRequestException({msg: `Item Does Not Exsist! Please Create New`});
      }
      console.log(`Other Database Error: ${err}`)
    }
  }
