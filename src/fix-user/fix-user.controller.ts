import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import {FixUserService} from './fix-user.service';
import {UpdateFixUserDto} from './dto/update-fix-user.dto';
import {ApiBearerAuth, ApiResponse, ApiTags} from '@nestjs/swagger';
import {Prisma} from '@prisma/client';
import {AuthGuard} from '../auth/auth.guard';

@ApiTags('Fix-Users')
@Controller('fix-users')
export class FixUserController {
  constructor(private readonly fixUserService: FixUserService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  Users() {
    return this.fixUserService.users();
  }
  @Get(':input')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  findUserByUniqueInput(@Param('input') input: Prisma.FixUserWhereUniqueInput) {
    return this.fixUserService.findOneWhereUniqueInput(input);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateFixUserDto: UpdateFixUserDto) {
    return this.fixUserService.update(+id, updateFixUserDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.fixUserService.remove(+id);
  }
}
