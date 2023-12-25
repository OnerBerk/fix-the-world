import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {RegisterAuthDto} from './dto/register-auth.dto';
import {PrismaClient} from '@prisma/client';
import * as bcrypt from 'bcrypt';
import {FixUserEntity} from '../fix-user/entities/fix-user.entity';
import {LoginAuthDto} from './dto/login-auth.dto';
import {FixUserService} from '../fix-user/fix-user.service';
import {PrismaClientKnownRequestError} from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  prisma = new PrismaClient();
  fixUserService = new FixUserService();

  async register(registerAuthDto: RegisterAuthDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(registerAuthDto.password, salt);
    let user = new FixUserEntity();
    const findUser = this.prisma.fixUser.findUnique({where: {email: registerAuthDto.email}});
    user.email = registerAuthDto.email;
    user.firstname = registerAuthDto.firstname;
    user.lastname = registerAuthDto.lastname;
    user.password = hashedPassword;
    user.roles = registerAuthDto.role;
    try {
      return this.prisma.fixUser.create({data: user});
    } catch (e) {
      throw new Error(e);
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    const user = new FixUserEntity();
    const findUser = this.prisma.fixUser.findUnique({where: {email: loginAuthDto.email}});
    try {
      const find = await this.fixUserService.findByEmail(loginAuthDto.email);
      if (!find) {
        return new PrismaClientKnownRequestError("This user doesn't exist", {
          clientVersion: '',
          code: '404',
        });
      }
      const isPasswordValid = await bcrypt.compare(loginAuthDto.password, user.password);
      if (!isPasswordValid) {
        return null;
      }
      return 'This action adds a new auth';
    } catch (e) {
      throw new Error(e);
    }
  }
}
