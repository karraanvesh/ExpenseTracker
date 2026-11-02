export function jsonToCsv(data) {

    /**
     * Checking whether the data is an valid json array or not and must contain
     * atleast one json.
     */
    if (!Array.isArray(data) || data.length === 0) return "";
    
    /**
     * extracting all the keys from the first object of the json array .
     * Since , these keys are common for every json object in the array 
     * these can be the headings or headers in the csv file which we are 
     * going to export .
     */
    const headers = Object.keys(data[0]);
    
    /**
     * Here , the outer map helps us to iterate over every object in the json array
     */
    const rows = data.map(obj => 

        /**
         * Inner map helps us to iterate over the headers of every object 
         */
        headers.map(header => {
            /**
             * Checking whether the current object header contains value or not . 
             * If it is null or undefined then we are assigning the value as empty string.
             * Or else we are assigning value of the header.
             */
            let value = (obj[header]) ?? "";

            /**
             * In csv , everything is a text . So we are checking the value is an 
             * json object or not . If object we are usinh JSON.stringigy to convert into
             * string or else any other value like number etc , we are using String to
             * convert them to strings.
             */

            value = (typeof value === "object") ? JSON.stringify(value) : String(value);

            /**
             * Checking whether the value of the current header contains , " or \n. Since 
             * it is a single value we need to wrap the whole thing into one column for better
             * visibility and understanding.
             * 
             * `"${value.replace(/"/g, '""')}"` -
             * This checks for the double quotes and replace the 
             * all occurences of the double quotes with double quotes
             * and wrap the whole value into another double quote
             */

            if (value.includes(",") || value.includes('"') || value.includes("\n")) {
                value = `"${value.replace(/"/g, '""')}"`;
            }

            // at last , we return the formatted value of the current header .
            return value;

        }).join(",") // combines all the individual strings into a single string separated by commas
    );

    // This adds the header row at the beginning and separates each row with a newline.
    return [headers.join(","), ...rows].join("\n");
}