import { Controller, Get, Res } from '@nestjs/common';
import { impresionService } from './impresion';

@Controller()
export class AppController {
    constructor(private readonly impresionService: impresionService) {}

    @Get()
    impresion(@Res() res) {
        res.send('NestJS Printer App is running');
    }

    @Get('/print')
    async print(@Res() res) {
        await this.impresionService.impresion();
        //res.send('Print job executed');
    }

}