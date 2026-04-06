import { PartialType } from '@nestjs/mapped-types';
import { CreateItemGroupMasterDto } from './create-item-group-master.dto';

export class UpdateItemGroupMasterDto extends PartialType(CreateItemGroupMasterDto) {}
