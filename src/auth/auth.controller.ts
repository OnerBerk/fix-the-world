import {Controller, Get, Post, Body, UseGuards, Request} from '@nestjs/common';
import {AuthService} from './auth.service';
import {RegisterAuthDto} from './dto/register-auth.dto';
import {LoginAuthDto} from './dto/login-auth.dto';
import {ApiTags} from '@nestjs/swagger';
import {AuthGuard} from './auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerAuthDto: RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }
  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
