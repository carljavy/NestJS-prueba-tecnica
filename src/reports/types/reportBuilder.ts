import { Report } from './report';

export class ReportBuilder {
    private report: Report;

    constructor() {
        this.report = new Report();
    }

    public setTitle(title: string): ReportBuilder {
        this.report.title = title;
        return this;
    }

    public setUser(user: string): ReportBuilder {
        this.report.user = user;
        return this;
    }

    public setDate(date: Date): ReportBuilder {
        this.report.date = date;
        return this;
    }

    public setSellType(selltype: string): ReportBuilder {
        this.report.selltype = selltype;
        return this;
    }

    public setPeriodDate(periodDate: Date): ReportBuilder {
        this.report.periodDate = periodDate;
        return this;
    }

    public setTotalOrders(totalOrders: number): ReportBuilder {
        this.report.totalOrders
        return this;
    }

    public setTotalOrdersAmount(totalOrdersAmount: number): ReportBuilder {
        this.report.totalOrdersAmount = totalOrdersAmount;
        return this;
    }

    //printHeader
    //printOrders
    //printTotalOrders
    //printFooter

    public build(): Report {
        return this.report;
    }
}