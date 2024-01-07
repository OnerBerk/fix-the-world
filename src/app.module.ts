import {Logger, Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseCheck} from './database/database.check';
import {FixUserModule} from './fix-user/fix-user.module';
import {PrismaModule} from './prisma/prisma.module';
import {AuthModule} from './auth/auth.module';
@Module({
  imports: [FixUserModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, DatabaseCheck, Logger],
})
export class AppModule {}
