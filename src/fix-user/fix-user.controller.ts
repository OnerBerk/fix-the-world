import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {FixUserService} from './fix-user.service';
import {UpdateFixUserDto} from './dto/update-fix-user.dto';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {Prisma} from '@prisma/client';

@ApiTags('Fix-Users')
@Controller('fix-users')
export class FixUserController {
  constructor(private readonly fixUserService: FixUserService) {}

  @Get()
  @ApiResponse({status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({status: 403, description: 'Forbidden.'})
  Users() {
    return this.fixUserService.users();
  }
  @Get(':input')
  findUserByUniqueInput(@Param('input') input: Prisma.FixUserWhereUniqueInput) {
    return this.fixUserService.findOneWhereUniqueInput(input);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFixUserDto: UpdateFixUserDto) {
    return this.fixUserService.update(+id, updateFixUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fixUserService.remove(+id);
  }
}
