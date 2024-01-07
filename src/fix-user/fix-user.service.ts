import {Injectable} from '@nestjs/common';
import {UpdateFixUserDto} from './dto/update-fix-user.dto';
import {FixUser, Prisma} from '@prisma/client';
import {PrismaService} from '../prisma/prisma.service';

@Injectable()
export class FixUserService {
  constructor(private prisma: PrismaService) {}

  async users(): Promise<FixUser[]> {
    return this.prisma.fixUser.findMany();
  }
  async findOneWhereUniqueInput(input: Prisma.FixUserWhereUniqueInput): Promise<FixUser | null> {
    return this.prisma.fixUser.findUnique({where: input});
  }

  async findById(id: number): Promise<FixUser | null> {
    return this.prisma.fixUser.findUnique({where: {id}});
  }

  async findByEmail(email: string): Promise<FixUser | null> {
    return this.prisma.fixUser.findUnique({where: {email: email}});
  }

  async update(id: number, updateFixUserDto: UpdateFixUserDto) {
    return `This action updates a #${id} fixUser`;
  }

  async remove(id: number) {
    return `This action removes a #${id} fixUser`;
  }
}
