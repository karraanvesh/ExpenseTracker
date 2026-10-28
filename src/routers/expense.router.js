import { Command } from "commander";
import { addExpenseController, deleteExpenseController, getAllExpensesController, getExpensesByMonthController, getTotalExpensesController, updateExpenseController } from "../controllers/expense.controller.js";

export function expenseRouter() {
    

    const program = new Command();

    program
    .command("add")
    .requiredOption("--description <description of the expense>" , "expense description")
    .requiredOption("--amount <amount of the expense>" , "amount of the expense")
    .action((options) => {

        if(isValidAmount(options.amount)) {
            addExpenseController(options.description , options.amount);
        } else {
            throw new Error("Amount should be greater than 0");
        }
    });

    program
    .command("update")
    .requiredOption("--id <id of the expense>" , "id of the expense")
    .option("--description <description of the expense>" , "expense description")
    .option("--amount <amount of the expense>" , "amount of the expense")
    .action((options) => {

        const fieldsAndValues = {};

        if(options.description) {
            fieldsAndValues.description = options.description;
        }

        if(options.amount && isValidAmount(options.amount)) {
            fieldsAndValues.amount = options.amount;
        }

        updateExpenseController(Number(options.id) , fieldsAndValues);
    });

    program
    .command("delete")
    .requiredOption("--id <id of the expense>" , "id of the expense")
    .action((options) => {
        deleteExpenseController(Number(options.id));
    });

    program
    .command("summary")
    .option("--month <month of the current year>" , "month of the current year")
    .action((options) => {

    if(!options.month) {
        getTotalExpensesController();
    } else {
        getExpensesByMonthController(Number(options.month));
    }
    
    });


    program
    .command("list")
    .action((options) => {
        getAllExpensesController();
    });

    program.parse();
}