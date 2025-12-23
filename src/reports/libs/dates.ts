
//function to format dates, and get actual date
export function formateDates(periodDate: Date = new Date()){

    let fecha = new Date;

    if(periodDate){
       fecha = new Date(periodDate)
    } else {
        fecha = new Date();
    }

    //formate date only day, month, year    1/9/2024
    const actualDay = new Date(periodDate).toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    //formate date only hour, minute     14:27
    const actualHour = new Date(periodDate).toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })

    //full date, day, month, year, hour, minute    1/9/2024 14:27
    const actualDayANDHour = `${actualDay} ${actualHour}`

    return { actualDay, actualHour, actualDayANDHour }
}