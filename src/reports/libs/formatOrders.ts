import { formateDates } from '../libs/dates';

export function formatOrders(orderType, orders, printer){

    let numOrders = 0;
    let totalAmount = 0;

    printer.underline(true)
    printer.tableCustom([
        {text: "Cuenta"},
        {text: "Monto($)", align:"RIGHT"},
        {text: "Ca.por", align:"RIGHT"},
        {text: "Ca.A", align:"RIGHT"},
        {text: "", align:"RIGHT"},
        {text: "Hora", align:"RIGHT"}
    ])
    printer.underline(false)

    orders.forEach( ( order, indice) => {
        
        const hour = formateDates(orders[indice].accountId.createdAt)
        const getHour = hour.actualHour;
        //
        
        if(order.accountId.sellType === orderType){
            printer.tableCustom([
                {text: `${order.accountId.code}`},
                {text: `${parseFloat(order.accountId.checkTotal).toFixed(2)}`, align:"RIGHT"},
                {text: `${order.cancellationBy.employeeNumber}`, align:"RIGHT"},
                {text: `${order.accountId.userCode}`, align:"RIGHT"},
                {text: `${order.accountId.user.slice(0, 7)}`, align:"RIGHT"},
                {text: `${getHour}`, align:"RIGHT"},
            ])
            totalAmount += parseFloat(order.accountId.checkTotal)
            numOrders++;
        }
    })

    printer.newLine()
    printer.alignRight()
    printer.bold(true)

    printer.print(`${numOrders} Cancelaciones ${totalAmount}`) 

    printer.bold(false)
    printer.newLine()

}