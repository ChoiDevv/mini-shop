import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

console.log(`connect ${process.env.DB_HOST}, DB_NAME: ${process.env.DB_NAME}`);