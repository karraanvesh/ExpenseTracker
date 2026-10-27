import { Command } from "commander";
import { addExpenseController, deleteExpenseController, getAllExpensesController, updateExpenseController } from "../controllers/expense.controller.js";

export function expenseRouter() {
    

    const program = new Command();

    program
    .command("add")
    .requiredOption("--description <description of the expense>" , "expense description")
    .requiredOption("--amount <amount of the expense>" , "amount of the expense")
    .action((options) => {

        addExpenseController(options.description , options.amount);
    });

    program
    .command("update")
    .requiredOption("--id <id of the expense>" , "id of the expense")
    .option("--description <description of the expense>" , "expense description")
    .option("--amount <amount of the expense>" , "amount of the expense")
    .action((options) => {

        const flags = [];
        const fieldsAndValues = {

        };

        if(options.description) {
            flags.push("description");
            fieldsAndValues.description = options.description;
        }

        if(options.amount) {
            flags.push("amount");
            fieldsAndValues.amount = options.amount;
        }

        updateExpenseController(Number(options.id) , flags , fieldsAndValues);
    });

    program
    .command("delete")
    .requiredOption("--id <id of the expense>" , "id of the expense")
    .action((options) => {
        deleteExpenseController(options.id);
    });

    program
    .command("summary")
    .option("--month <month of the current year>" , "month of the current year")
    .action((options) => {

    if(!options.month) {
        console.log("Filter all expenses"); 
    } else {
        console.log("summary of the month : " , options);
    }

    // call the corresponding controller
    });


    program
    .command("list")
    .action((options) => {
        getAllExpensesController();
    });

    program.parse();
}