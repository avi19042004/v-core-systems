import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
    // constructor(private prisma: PrismaService){}

    // async signUp(data: SignUpDto){
    //     const { username, name, password } = data;
        
    //     const exsistingUsername = await this.prisma.user.findUnique({
    //         where: {username}
    //     })
    //     if(exsistingUsername) throw new ConflictException('Username already exists');

    //     const hashPassword = await bcrypt.hash(password, 10);

    //     const user = await this.prisma.user.create({
    //         data: {
    //             username,
    //             name,
    //             password: hashPassword
    //         }
    //     });

    //     return user;
    // }

    // async signIn(data: SignInDto){
    //     const { username, password } = data;

    //     const user = await this.prisma.user.findUnique({
    //         where:{username}
    //     });
    //     if(!user) throw new UnauthorizedException('Invalid username or password');

    //     const isPasswordReal = await bcrypt.compare(password, user.password);
    //     if(!isPasswordReal) throw new UnauthorizedException('Invalid username or password');

    //     return user;
    // }
}
