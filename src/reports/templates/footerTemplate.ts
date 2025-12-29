export async function footerTemplate(printer) {

    printer.newLine();

    try {
        console.log("entre al try")
        await printer.printImage('./assets/footerpng.png');
    } catch (error){
        console.error("Error", error)
    }
    
}