import fs from "fs";
import path from "path";

const sourceFilePath = path.join(import.meta.dirname , "./expenseId.txt");

export function idGenerator() {
    try {
        
        let expenseId = 0; // by default we are starting from the 0th index 

        // synchronously , we are checking whether the sourceFilePath is a valid
        // path or not.
        if(fs.existsSync(sourceFilePath)) {

            // if it is a valid path , we are reading the data from the file 
            const id = fs.readFileSync(sourceFilePath , 'utf8');

            // converting the data from string to Number
            expenseId = Number(id) || 0;
        }

        const result = expenseId;

        expenseId++; // incrementing the expenseId

        // sync writing the updated expenseId into the file
        fs.writeFileSync(sourceFilePath , expenseId.toString() , 'utf8');

        return result;
    } catch (error) {
        console.log(error);
    }
}