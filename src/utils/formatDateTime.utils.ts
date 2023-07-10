export function formatDateTime(dateTime: string): string {
    const dateObj = new Date(dateTime);

    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    };
    
    const formatter = new Intl.DateTimeFormat("es-ES", options);

    return formatter.format(dateObj);
}
