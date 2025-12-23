import { ReportBuilder } from "./reportBuilder";

export class DirectorBuilder {
    private builder: ReportBuilder;

    constructor(reportBuilder: ReportBuilder) {
        this.builder = reportBuilder;
    }

    async cancelationsReport(orders, printer, formatDate, userRequested){
        this.builder.setTitle("Cancelaciones")
                    .setPeriodDetail(formatDate)
                    .setUser(userRequested)
                    .setCurrentDate()

        this.builder.printHeader(printer)

        await this.builder.printFoooter(printer)

        

        this.executePrint(printer)
    }

    executePrint(printer){
        printer.cut()

        printer.execute()
        console.log("Print executed successfully completed")

    }


}