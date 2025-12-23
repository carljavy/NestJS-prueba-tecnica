import { Injectable } from "@nestjs/common";
import { printerServices } from "./printerServices";
import { formateDates } from "src/reports/libs/dates";
import { ReportBuilder } from "src/reports/types/reportBuilder";
import { DirectorBuilder } from "src/reports/types/directorBuilder";

//Service to handle printing tasks
@Injectable()
export class ImpresionService {
    async print(cancellations, formateDates, userRequested) {

        //create new printer service instance
        let service = printerServices();
        const printer = service.getPrinter();

        //verify if printer is connected
        const isConected = printer.isPrinterConnected();
        console.log("Printer connected", isConected);

        //test to check if there are cancellations and the printer is working
        if( cancellations.length > 0 ) {
            
            const builder = new ReportBuilder();

            const directorBuilder = new DirectorBuilder(builder);

            directorBuilder.cancelationsReport(cancellations, printer, formateDates, userRequested)

        } else {
            printer.print("no cancellations to print")
        }

    }
}