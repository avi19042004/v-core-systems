import { IsString, MinLength, Matches, IsNotEmpty } from 'class-validator';

export class SignUpDto {
    @IsString()
    @IsNotEmpty({ message: 'Username is required' })
    username!: string;

    @IsString()
    @IsNotEmpty({ message: 'Name is required' })
    name!: string;

    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password is too weak. Must include uppercase, lowercase, numbers, and symbols (like #)',
    })
    password!: string;

    @IsString()
    @IsNotEmpty({ message: 'permissionsGroupId is required' })
    permissionGroupId!: string;
}