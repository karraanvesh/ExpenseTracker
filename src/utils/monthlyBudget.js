import fs from "fs";
import path from "path";

const filepath = path.join(import.meta.dirname , "./monthlyBudget.txt");

export function setMonthlyBudget(budget) {
    try {
        
        if(fs.existsSync(filepath)) {
            return `You have already set the monthly budget`;
        } else {
            fs.writeFileSync(filepath , String(budget) , 'utf8');

            return `Budget was successfully set for the current month`;
        }
    } catch (error) {
        console.log(error);
    }
}
