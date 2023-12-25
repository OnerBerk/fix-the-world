import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {FixUserService} from './fix-user.service';
import {CreateFixUserDto} from './dto/create-fix-user.dto';
import {UpdateFixUserDto} from './dto/update-fix-user.dto';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {FixUser} from '@prisma/client';

@ApiTags('Fix-Users')
@Controller('fix-user')
export class FixUserController {
  constructor(private readonly fixUserService: FixUserService) {}

  @Post()
  create(@Body() createFixUserDto: CreateFixUserDto) {
    return this.fixUserService.create(createFixUserDto);
  }

  @Get()
  @ApiResponse({status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({status: 403, description: 'Forbidden.'})
  findAll() {
    return this.fixUserService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.fixUserService.findOne(+id);
  }

  @Get(':email')
  findByEmail(@Param('email') email: string): Promise<FixUser> {
    return this.fixUserService.findByEmail(email);
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
