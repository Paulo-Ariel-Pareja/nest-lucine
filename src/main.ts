import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const appPort = configService.get('appConfig.port');
  await app.listen(appPort);
  Logger.log(`service running at port ${appPort}`, 'nest-lucine');
}
bootstrap();
