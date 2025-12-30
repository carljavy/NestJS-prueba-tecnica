//import { tables } from ''

import { formatOrders } from "../libs/formatOrders"

export function printOrderTemplate(printer, orders){

    //all types to order
    const orderType = [
        { label: "Restaurante", key: "ON_SITE_ORDER" },
        { label: "Para llevar", key: "TOGO_ORDER" },
        { label: "Telefonico", key: "PHONE_ORDER" },
        { label: "Rappi", key: "RAPPI_ORDER" }
    ]

    //for every label, print selltype
    for(const type of orderType){
        //------------------------------
        printer.newLine() 
        printer.drawLine()
        //------------------------------
        printer.newLine()
        printer.bold(true)
        printer.alignLeft()
        printer.print(`Tipo de venta; ${type.label}`)
        printer.bold(false)
        printer.newLine()

        //funcion para imprimir ordenes
        formatOrders(type.key, orders, printer)
        
    }

}