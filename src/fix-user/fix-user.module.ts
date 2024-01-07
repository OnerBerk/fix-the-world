import {Logger, Module} from '@nestjs/common';
import {FixUserService} from './fix-user.service';
import {FixUserController} from './fix-user.controller';
import {PrismaModule} from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FixUserController],
  providers: [FixUserService, Logger],
  exports: [FixUserService],
})
export class FixUserModule {}
