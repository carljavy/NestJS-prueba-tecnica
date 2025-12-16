import { Injectable } from "@nestjs/common";
import { printerServices } from "./printer/printerServices";

@Injectable() // to make the class injectable
export class impresionService {

    async impresion() { // method to handle printing

        const service = printerServices();
        const printer = service.getPrinter();

        const isConected = printer.isPrinterConnected();
        console.log("Printer connected", isConected);

        printer.print("test impresion")
        printer.cut();

        try {
            await printer.execute();
            console.log("Print job sent successfully");
        } catch (error) {
            console.error("Error sending print job", error);
        }
    }

}

