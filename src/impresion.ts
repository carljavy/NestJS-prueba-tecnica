import { Injectable } from "@nestjs/common";
import { ImpresionService } from "./entities/services/ticketPrinterServices";

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

            if( data.length > 0 ) {
                console.log("data extracted with exit :)")

                console.log("Initializing printer service...");
                await this.ImpresionService.print(data.slice(0, 10)); // Extracting only first 10 for testing

            } else if ( !data.length ) {
                console.log("data extraction empoty :(")
                throw new Error("No data extracted");
            }

        } catch (error) {
            console.error("Error fetching data", error);
        }
        
    }
}