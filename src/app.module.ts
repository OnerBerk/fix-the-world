import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseCheck} from './database/database.check';
import { FixUserModule } from './fix-user/fix-user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [FixUserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, DatabaseCheck],
})
export class AppModule {}
