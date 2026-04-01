import { IsString, MinLength, Matches, IsNotEmpty, IsJSON } from 'class-validator';

export class PermissionsGroupDto {
    @IsString()
    @IsNotEmpty({ message: "Permissions group name is required" })
    name: string;

    @IsJSON({ message: "Permissions must be a valid JSON string" })
    permissions: Record<string, number>;
}