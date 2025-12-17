import { Injectable } from "@nestjs/common";
import { printerServices } from "./printer/printerServices";

const urlpath = "";

@Injectable() // to make the class injectable
export class ImpresionService {
    
    async impresion() {

        console.log("Extracting data for printing...");

        try {
            const cuentas = await fetch(urlpath);

            if( !cuentas.ok ) {
                throw new Error('Error fetching data');
            }

            const data = await cuentas.json();

            if( data.length > 0 ) {
                console.log("data extracted with exit :)")

                console.log("Initializing printer service...");
                this.print(data.slice(0, 10)); // Extracting only first 10 for testing

            } else if ( !data.length ) {
                console.log("data extraction empoty :(")
                throw new Error("No data extracted");
            }

        } catch (error) {
            console.error("Error fetching data", error);
        }
        
    }

    private async print(cancellations) {

        let service = printerServices();
        const printer = service.getPrinter();

        const isConected = printer.isPrinterConnected();
        console.log("Printer connected", isConected);

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


        
//     const isConected = printer.isPrinterConnected();
//     console.log("Printer connected", isConected);

//     printer.print("test impresion")
//     printer.cut();

//     try {
//         await printer.execute();
//         console.log("Print job sent successfully");
//     } catch (error) {
//         console.error("Error sending print job", error);
//     }

