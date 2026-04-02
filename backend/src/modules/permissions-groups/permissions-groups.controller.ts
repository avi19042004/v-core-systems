import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermissionsGroupsService } from './permissions-groups.service';
import { PermissionsGroupDto } from './dto/permissions-group.dto';

@Controller('permissions-groups')
export class PermissionsGroupsController {
  constructor(private readonly permissionsGroupsService: PermissionsGroupsService) {}

  @Post()
  create(@Body() createPermissionsGroupDto: PermissionsGroupDto) {
    return this.permissionsGroupsService.createPermissionGroup(createPermissionsGroupDto);
  }

  @Get()
  findAll() {
    return this.permissionsGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionsGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermissionsGroupDto: PermissionsGroupDto) {
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionsGroupsService.remove(+id);
  }
}
