import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FixUserService } from './fix-user.service';
import { CreateFixUserDto } from './dto/create-fix-user.dto';
import { UpdateFixUserDto } from './dto/update-fix-user.dto';

@Controller('fix-user')
export class FixUserController {
  constructor(private readonly fixUserService: FixUserService) {}

  @Post()
  create(@Body() createFixUserDto: CreateFixUserDto) {
    return this.fixUserService.create(createFixUserDto);
  }

  @Get()
  findAll() {
    return this.fixUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fixUserService.findOne(+id);
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
