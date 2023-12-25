import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as process from 'process';
import {DatabaseCheck} from './database/database.check';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const databaseChecker = app.get(DatabaseCheck);
  await databaseChecker.checkConnection();
  const config = new DocumentBuilder()
    .setTitle('Fix the World Api')
    .setDescription('The api which change everything')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
