import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as process from 'process';
import {DatabaseCheck} from './database/database.check';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const databaseChecker = app.get(DatabaseCheck);
  await databaseChecker.checkConnection();
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
