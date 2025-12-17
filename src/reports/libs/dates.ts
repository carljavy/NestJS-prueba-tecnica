
//function to format dates, and get actual date
export function formateDates(periodDate: Date = new Date()){

    let fecha = new Date;

    if(periodDate){
       fecha = new Date(periodDate)
    } else {
        fecha = new Date();
    }


    const actualDay = new Date(periodDate).toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    const actualHour = new Date(periodDate).toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })

    const actualDayANDHour = `${actualDay} ${actualHour}`

    return { actualDay, actualHour, actualDayANDHour }
}