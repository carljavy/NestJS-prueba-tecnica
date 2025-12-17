import { ReportBuilder } from "./reportBuilder";

export class DirectorBuilder {
    private builder: ReportBuilder;

    constructor(reportBuilder: ReportBuilder) {
        this.builder = reportBuilder;
    }

    async cancelationsReport(orders, printer){
        this.builder.setTitle("Cancelaciones")
                    //.setPeriodDate()
                    .setUser("User")
                    //.setCurrentDate()

        
    }


}