import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';

import * as dotenv from 'dotenv';
dotenv.config(); // 👉 수동 로딩 추가

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error']
  });
  await app.listen(Number(process.env.SERVER_PORT));
}
bootstrap();