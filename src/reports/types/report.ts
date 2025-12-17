export class Report {
    public title: string | null = null;
    public user: string | null = null;
    public date: Date | null = null;
    public selltype: string | null = null;
    public periodDate: Date | null = null;
    public totaOrders: number | null = null;
    public totalOrdersAmount: number | null = null;

    constructor(){}

}

export class ReportBuilder {
    private report: Report;

    constructor() {
        this.report = new Report();
    }

    private setTitle(title) {
        this.report.title = title;
        return this;
    }

    setUser(user) {
        this.report.user = user;
        return this;
    }

}