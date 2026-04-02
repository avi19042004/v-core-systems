import { ConflictException, Injectable } from '@nestjs/common';
import { PermissionsGroupDto } from './dto/permissions-group.dto';
import { PrismaService } from '@app/common/databaseService/prisma.service';

@Injectable()
export class PermissionsGroupsService {
  constructor( private prisma: PrismaService ){}
  async createPermissionGroup( permissionsGroupDto: PermissionsGroupDto) {
    const { name, permissions } = permissionsGroupDto;
    
    const exsistingPermissionGroup = await this.prisma.permissionGroup.findUnique({
      where: {name}
    });
    if(exsistingPermissionGroup) throw new ConflictException({msg: "Permission Group Already Exsist"})

    const permissionGroup = await this.prisma.permissionGroup.create({
      data: {
        name,
        permissions
      }
    })
    return 'This action adds a new permissionsGroup';
  }

  findAll() {
    return `This action returns all permissionsGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permissionsGroup`;
  }

  update(id: number, updatePermissionsGroupDto: PermissionsGroupsService) {
    return `This action updates a #${id} permissionsGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} permissionsGroup`;
  }
}
