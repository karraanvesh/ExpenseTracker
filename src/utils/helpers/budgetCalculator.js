import fs from "fs";
import path from "path";

const filepath = path.join(import.meta.dirname , "./../monthlyBudget.txt");

export function monthlyBudgetCalculator(amount , toBeAdded) {
    try {

        if(fs.existsSync(filepath)) {

            let budget = fs.readFileSync(filepath , 'utf8');
            budget = Number(budget);
            
            if(toBeAdded) {
                // delete or update request , we need to add this amount to the budget
                budget += amount;
            } else {
                // add or update request , we need to subtract this amount from the budget

                if(amount > budget) {
                    throw new Error("Unable to add or update the expense , Since you are exceeding the monthly budget");
                } else {
                    budget -= amount;
                }
                
            }

            fs.writeFileSync(filepath , String(budget) , 'utf8');

            return true;
        } else {
            throw new Error("NotFoundError : Unable to find the file or folder");
        }
    } catch (error) {
        console.log(error);
    }
}