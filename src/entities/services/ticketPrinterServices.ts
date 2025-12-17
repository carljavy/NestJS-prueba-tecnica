import { Injectable } from "@nestjs/common";
import { printerServices } from "./printerServices";
import { formateDates } from "src/reports/libs/dates";

//Service to handle printing tasks
@Injectable()
export class ImpresionService {
    async print(cancellations, formateDate) {

        //create new printer service instance
        let service = printerServices();
        const printer = service.getPrinter();

        //verify if printer is connected
        const isConected = printer.isPrinterConnected();
        console.log("Printer connected", isConected);

        //test to check if there are cancellations and the printer is working
        if( cancellations.length > 0 ) {
            printer.print("cancellations ready to print")
            printer.newLine()
            printer.print(formateDates().actualDay)
            printer.newLine()
            printer.print(formateDates().actualHour)
            printer.newLine()
            printer.print(formateDates().actualDayANDHour)
            printer.newLine()
            printer.print(formateDate)
        } else {
            printer.print("no cancellations to print")
        }
        
        
        printer.cut();

        try {
            await printer.execute();
            console.log("Print job sent successfully");
        } catch (error) {
            console.error("Error sending print job", error);
        }

    }
}