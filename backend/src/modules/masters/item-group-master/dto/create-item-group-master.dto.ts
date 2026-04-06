import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateItemGroupMasterDto {
    @IsString()
    @IsNotEmpty({message: "Group Name Can Not Be Empty"})
    itemGroupName!: string

    @IsString()
    description!: string

    @IsUUID()
    @IsNotEmpty({message: "UserId Can Not Be Empty"})
    createdById!: string

    @IsUUID()
    @IsNotEmpty({message: "UserId Can Not Be Empty"})
    updatedById!: string
}