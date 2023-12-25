import { Module } from '@nestjs/common';
import { FixUserService } from './fix-user.service';
import { FixUserController } from './fix-user.controller';

@Module({
  controllers: [FixUserController],
  providers: [FixUserService],
})
export class FixUserModule {}
