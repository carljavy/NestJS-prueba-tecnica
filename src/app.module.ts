import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ImpresionService } from './impresion';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ImpresionService],
})

export class AppModule {}


