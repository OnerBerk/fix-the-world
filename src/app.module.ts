import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseCheck} from './database/database.check';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DatabaseCheck],
})
export class AppModule {}
