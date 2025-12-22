import { Report } from './report';
import { formateDates } from '../libs/dates';
import { headerTemplate } from '../templates/headerTemplate';

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

    public setDate(date: string): ReportBuilder {
        this.report.date = date;
        return this;
    }

    public setCurrentDate(): ReportBuilder {
        this.report.date = formateDates().actualDayANDHour
        return this
    }

    public setSellType(selltype: string): ReportBuilder {
        this.report.selltype = selltype;
        return this;
    }

    public setPeriodDetail(periodDetail: string): ReportBuilder {
        this.report.periodDetail = periodDetail;
        return this;
    }

    printHeader(printer){
        const report = this.build();
        headerTemplate(printer, report)
    }

    public setTotalOrders(totalOrders: number): ReportBuilder {
        this.report.totalOrders = totalOrders;
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