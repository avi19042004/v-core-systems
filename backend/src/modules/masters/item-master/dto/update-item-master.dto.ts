import { PartialType } from '@nestjs/mapped-types';
import { CreateItemMasterDto } from './create-item-master.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateItemMasterDto extends PartialType(CreateItemMasterDto) {
    @IsUUID()
    @IsNotEmpty({message: "updatedById is required to track who modified this" })
    updatedById!: string;
}
