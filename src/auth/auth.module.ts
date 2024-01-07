import {Logger, Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {PrismaModule} from '../prisma/prisma.module';
import {FixUserModule} from '../fix-user/fix-user.module';
import {JwtModule, JwtService} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {jwtConstants} from './constants';
import {JwtStrategy} from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '60s'},
    }),
    PrismaModule,
    FixUserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, Logger, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
