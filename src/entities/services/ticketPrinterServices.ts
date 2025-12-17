import { Injectable } from "@nestjs/common";
import { printerServices } from "./printerServices";

//Service to handle printing tasks
@Injectable()
export class ImpresionService {
    async print(cancellations) {

        //create new printer service instance
        let service = printerServices();
        const printer = service.getPrinter();

        //verify if printer is connected
        const isConected = printer.isPrinterConnected();
        console.log("Printer connected", isConected);

        //test to check if there are cancellations and the printer is working
        if( cancellations.length > 0 ) {
            printer.print("cancellations ready to print")
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