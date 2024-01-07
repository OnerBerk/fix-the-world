import {BadRequestException, HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import * as process from 'process';
import {RegisterAuthDto} from './dto/register-auth.dto';
import * as bcrypt from 'bcrypt';
import {FixUserEntity} from '../fix-user/entities/fix-user.entity';
import {LoginAuthDto} from './dto/login-auth.dto';
import {PrismaService} from '../prisma/prisma.service';
import {FixUserService} from '../fix-user/fix-user.service';
import {JwtService} from '@nestjs/jwt';
import {FixUser} from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private fixUserService: FixUserService,
    private readonly logger: Logger,
    private jwtService: JwtService,
  ) {}
  async register(registerAuthDto: RegisterAuthDto) {
    const existUser = await this.fixUserService.findByEmail(registerAuthDto.email);
    if (existUser) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(registerAuthDto.password, salt);
    let user = new FixUserEntity();
    user.email = registerAuthDto.email;
    user.firstname = registerAuthDto.firstname;
    user.lastname = registerAuthDto.lastname;
    user.password = hashedPassword;
    user.roles = registerAuthDto.role;
    try {
      const newUser = await this.prisma.fixUser.create({data: user});
      return {message: 'User successfully registered', user: newUser};
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
  async login(loginAuthDto: LoginAuthDto) {
    const existUser = await this.fixUserService.findByEmail(loginAuthDto.email);
    if (!existUser) {
      throw new HttpException("User doesn't exist", HttpStatus.NOT_FOUND);
    }
    try {
      const isPasswordValid = await bcrypt.compare(loginAuthDto.password, existUser.password);
      if (!isPasswordValid) {
        throw new HttpException('Invalid Password', 401);
      }
      const payload = {id: existUser.id, name: existUser.lastname};
      const token = this.jwtService.sign(payload);
      return {token: token, user: existUser};
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
