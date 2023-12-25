import {Injectable} from '@nestjs/common';
import {CreateFixUserDto} from './dto/create-fix-user.dto';
import {UpdateFixUserDto} from './dto/update-fix-user.dto';
import {FixUser, PrismaClient} from '@prisma/client';

@Injectable()
export class FixUserService {
  prisma = new PrismaClient();
  create(createFixUserDto: CreateFixUserDto) {
    return 'This action adds a new fixUser';
  }

  findAll(): Promise<FixUser[]> {
    return this.prisma.fixUser.findMany();
  }

  findOne(id: number): Promise<FixUser> {
    return this.prisma.fixUser.findUnique({where: {id: id}});
  }
  async findByEmail(email: string): Promise<FixUser> {
    return this.prisma.fixUser.findUnique({where: {email: email}});
  }
  update(id: number, updateFixUserDto: UpdateFixUserDto) {
    return `This action updates a #${id} fixUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} fixUser`;
  }
}
