import { Controller, Get, Res } from '@nestjs/common';
import { ImpresionService } from './impresion';

@Controller()
export class AppController {
    constructor(private readonly impresionService: ImpresionService) {}

    @Get()
    impresion(@Res() res) {
        res.send('NestJS Printer App is running');
    }

    @Get('/print')
    async print() {
        await this.impresionService.impresion();
        //res.send('Print job executed');

        return{
            status: 'success',
            message: 'Print job executed'
        }
    }

}