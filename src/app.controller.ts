import { Controller, Get, Res } from '@nestjs/common';
import { FetchingService } from './impresion';

//controller with endpoints to handle requests
@Controller()
export class AppController {
    constructor(private readonly fethingServices: FetchingService) {}

    @Get()
    impresion(@Res() res) {
        res.send('NestJS Printer App is running');
    }

    @Get('/print')
    async print() {
        await this.fethingServices.impresion();
        //res.send('Print job executed');

        //to stop the request hanging
        return{
            //statusCode: 200,
            status: 'success',
            //message to indicate print job execution
            message: 'Print job executed'
        }
    }

}