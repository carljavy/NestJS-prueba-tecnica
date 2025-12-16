import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { impresionService } from './impresion';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [impresionService],
})

export class AppModule {}


