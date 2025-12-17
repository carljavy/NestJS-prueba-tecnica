import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FetchingService } from './impresion';
import { ImpresionService } from './printer/ticketPrinterServices';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    FetchingService,
    ImpresionService
  ],
})

export class AppModule {}


