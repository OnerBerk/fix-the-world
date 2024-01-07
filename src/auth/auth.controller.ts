import {Controller, Get, Post, Body, UseGuards, Request, Logger} from '@nestjs/common';
import {AuthService} from './auth.service';
import {RegisterAuthDto} from './dto/register-auth.dto';
import {LoginAuthDto} from './dto/login-auth.dto';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
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
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    Logger.log('ici', req);
    return req.user;
  }
}
