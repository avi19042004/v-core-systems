import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateItemMasterDto {
    @IsString()
    @IsNotEmpty({message: "itemName Can Not Be Empty"})
    itemName!: string;

    @IsUUID()
    @IsNotEmpty({message: "itemGroupId Can Not Be Empty"})
    itemGroupId!: string;

    @IsString()
    @IsNotEmpty({message: "hsnCode Can Not Be Empty"})
    hsnCode!: string;

    @IsString()
    @IsNotEmpty({message: "UMO Can Not Be Empty"})
    umo!: string;

    @IsUUID()
    @IsNotEmpty({message: "createdById Can Not Be Empty"})
    createdById!: string;
    
    @IsUUID()
    @IsNotEmpty({message: "createdById Can Not Be Empty"})
    updatedById!: string;
}
