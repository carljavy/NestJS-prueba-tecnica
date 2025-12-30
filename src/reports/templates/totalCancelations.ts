export function totalCancelations(printer, total, monto){

    printer.newLine()
    printer.drawLine()
    printer.alignRight()
    printer.bold(true)
    printer.print(`${total} Cancelaciones ${monto.toFixed(0)}`)
    printer.bold(false)
    printer.newLine()
    printer.drawLine()

}