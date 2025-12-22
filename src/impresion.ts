import { Injectable } from "@nestjs/common";
import { ImpresionService } from "./entities/services/ticketPrinterServices";
import { formateDates } from "./reports/libs/dates";

const urlpath = "";

@Injectable() // to make the class injectable
export class FetchingService {
    
    constructor( private readonly ImpresionService: ImpresionService ) {}

    async impresion() {

        console.log("Extracting data for printing...");

        try {
            const cuentas = await fetch(urlpath);

            if( !cuentas.ok ) {
                throw new Error('Error fetching data');
            }

            const data = await cuentas.json();

            const periodDate = data[0].createdAt
            const formateDate = formateDates(periodDate)
            const userRequested = "1001 Alejandro A"

            if( data.length > 0 ) {
                console.log("data extracted with exit :)")

                console.log("Initializing printer service...");
                await this.ImpresionService.print(data.slice(0, 10), formateDate.actualDay, userRequested); // Extracting only first 10 for testing

            } else if ( !data.length ) {
                console.log("data extraction empoty :(")
                throw new Error("No data extracted");
            }

        } catch (error) {
            console.error("Error fetching data", error);
        }
        
    }
}