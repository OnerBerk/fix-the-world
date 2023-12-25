import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseCheck} from './database/database.check';
import { FixUserModule } from './fix-user/fix-user.module';
@Module({
  imports: [FixUserModule],
  controllers: [AppController],
  providers: [AppService, DatabaseCheck],
})
export class AppModule {}
