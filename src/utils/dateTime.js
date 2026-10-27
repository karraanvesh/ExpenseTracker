export function getTimeStamp() {
    const dateObj = new Date();

    const year = dateObj.getFullYear(); // gives current year
    const month = dateObj.getMonth() + 1; // gives current month
    const date = dateObj.getDate(); // gives current date
    const hours = dateObj.getHours(); // gives hours according the localtime of the system environment
    const minutes = dateObj.getMinutes(); // gives minutes acc to the localtime of the system environment
    const seconds = dateObj.getSeconds(); // gives seconds
    const milliseconds = dateObj.getMilliseconds(); // gives milliseconds

    const result = `${date}-${month}-${year} ${hours}:${minutes}:${seconds}.${milliseconds}`;

    return result;
}
